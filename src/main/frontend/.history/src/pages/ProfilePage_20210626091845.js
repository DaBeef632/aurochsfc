import React, {useState, useEffect} from 'react';
import axios from "axios";

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
        <h1>{userProfile.userName}</h1>
        <p>{userProfile.userProfileId}</p>

      </div>
    )
  })
};

