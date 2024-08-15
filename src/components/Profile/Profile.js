// src/components/ProfilePage.js
import React from "react";
import styles from "./Profile.module.css"; // Import the CSS module
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => {
    console.log("state", state);
    return state.applicationData.userData;
  });

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <h1 className={styles.profileTitle}>Profile</h1>
        <p>
          <strong>Name:</strong> {userData.name}
        </p>
        <p>
          <strong>Username:</strong> {userData.userName}
        </p>
        <p>
          <strong>Email:</strong> {userData.email}
        </p>
        <p>
          <strong>Contact:</strong> {userData.contact}
        </p>
        <button className={styles.editButton}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
