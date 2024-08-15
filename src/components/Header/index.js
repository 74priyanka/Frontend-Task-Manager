import styles from "./styles.module.css";
import profilePic from "../../assets/profilePic.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => {
    console.log("state", state);
    return state.applicationData.userData;
  });

  const openProfile = () => {
    navigate("/profile");
  };
  return (
    <header className={styles.header}>
      <div className={styles.profileWrapper} onClick={openProfile}>
        <img src={profilePic} alt="Profile" className={styles.profilePic} />
        <h3 className={styles.userName}>{userData.name}</h3>
      </div>
      <h2 className={styles.title}>Task Manager</h2>
    </header>
  );
};

export default Header;
