package com.aurochs.aurochsfc.profile;

import com.aurochs.aurochsfc.bucket.BucketName;
import com.aurochs.aurochsfc.fileStore.FileStore;
import org.apache.http.entity.ContentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class UserProfileService {

    private final UserProfileDataAccessService userProfileDataAccessService;
    private final FileStore fileStore;

    @Autowired
    public UserProfileService(UserProfileDataAccessService userProfileDataAccessService, FileStore fileStore) {
        this.userProfileDataAccessService = userProfileDataAccessService;
        this.fileStore = fileStore;
    }

    List<UserProfile> getUserProfiles(){
        return userProfileDataAccessService.getUserProfiles();
    }

    public void uploadUserProfileImage(UUID userProfileId, MultipartFile file) {
            //1. check if image is not empty
        isFileEmpty(file);
        //2. If file is an image
        isImage(file);
        //3. the user exists in our database
           UserProfile user = getUserOrElseThrow(userProfileId);
        //4. grab some metadate from file if any
        Map<String, String> metadata = new HashMap<>();
        metadata.put("Content-Type", file.getContentType());
        metadata.put("Content-Length", String.valueOf(file.getSize()));
        //5. store the image in s3 and update database {userProfileImageLink} with s3 image link
        String path = String.format("%s/%s", BucketName.PROFILE_IMAGE.getBucketName(), user.getUserProfileId());
        String filename = String.format("%s-%s", file.getOriginalFilename(), UUID.randomUUID());

        try{
        fileStore.save(path, filename, Optional.of(metadata), file.getInputStream());
        user.setUserProfileImageLink(filename);
        } catch (IOException e){
        throw new IllegalStateException(e);
    }
}
    public byte[] downloadUserProfileImage(UUID userProfileId) {
        UserProfile user = getUserOrElseThrow(userProfileId);
        String path = String.format("%s/%s",
                BucketName.PROFILE_IMAGE.getBucketName(),
                user.getUserProfileId());
        return user.getUserProfileImageLink()
                .map(key -> fileStore.download(path, key))
                .orElse(new byte[0]);

    }
    private UserProfile getUserOrElseThrow(UUID userProfileId) {
        return userProfileDataAccessService
                .getUserProfiles()
                .stream()
                .filter(userProfile -> userProfileId.equals(userProfileId))
                .findFirst()
                .orElseThrow(() -> new IllegalStateException(String.format("User profile %s not found", userProfileId)));
    }

    private void isImage(MultipartFile file) {
        if(!Arrays.asList(ContentType.IMAGE_JPEG.getMimeType(),
                ContentType.IMAGE_PNG.getMimeType(),
                ContentType.IMAGE_GIF.getMimeType()).contains(file.getContentType())){
            throw new IllegalStateException("File must be an image");
        }
    }

    private void isFileEmpty(MultipartFile file) {
        if(!file.isEmpty()){
            throw new IllegalStateException("Can not upload empty file [" + file.getSize() + "]");
        }
    }
}
