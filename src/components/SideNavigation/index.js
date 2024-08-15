import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const SideNavigation = () => {
  const navigate = useNavigate();

  const userLoginDetails = useRef(
    localStorage.getItem("userLoginDetails") || null
  );

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleTasks = () => {
    navigate("/");
  };

  const handleLogOut = () => {
    localStorage.removeItem("userLoginDetails");
    window.location.reload();
  };

  return (
    <div className={styles.profileInfo}>
      <ul>
        <li onClick={handleProfile}>Profile</li>
        <li onClick={handleTasks}>Tasks List</li>
        {userLoginDetails.current ? (
          <li onClick={handleLogOut}>Logout</li>
        ) : null}
      </ul>
    </div>
  );
};

export default SideNavigation;
