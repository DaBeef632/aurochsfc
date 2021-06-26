//package com.aurochs.aurochsfc.profile;
//
//import com.aurochs.aurochsfc.dataStore.FakeUserProfileDataStore;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public class UserProfileDataAccessService {
//
//    public UserProfileDataAccessService(FakeUserProfileDataStore fakeUserProfileDataStore) {
//        this.fakeUserProfileDataStore = fakeUserProfileDataStore;
//    }
//
//    private final FakeUserProfileDataStore fakeUserProfileDataStore;
//
//    List<UserProfile> getUserProfiles(){
//        return fakeUserProfileDataStore.getUserProfiles();
//    }
//}
