import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useDropzone} from 'react-dropzone'

const UserProfiles = () => {
  const {userProfiles, seUserProfiles} = useState([]);

  const fetchUserProfiles = () => {
    axios.get("heetp://localhost:8080/user-profile").then(res => {
      console.log(res);
      setUserProfile(res.data);
    });
};

useEffect(() => {
  fetchUserProfiles();
}, []);

  return userProfiles.map((userProfile, index) => {

    return (
      <div key={index}>
        {/* todo: profile image */}
        <br />
        <br />
        <h1>{userProfile.userName}</h1>
        <p>{userProfile.userProfileId}</p>
         <Dropzone {...userProfile}/>
         <br />
      </div>
    );
  });
};

function MyDropzone( {userProfileId }) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const file = acceptedFiles[0];
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);

    axios.post(`http://localhost:8080/user-profile/$userProfileId/image/upload`,
    formData,
    {
      headers:{
        "Content-Type": "multipart/form-data"
      }
    }
    ).then(() => {
      console.log("file uploaded successfully")
    }).catch(err => {
      console.log(err);
    });
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some profile image, or click to select profile image</p>
      }
    </div>
  )
}
