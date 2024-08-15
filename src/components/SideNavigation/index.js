import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const SideNavigation = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleTasks = () => {
    navigate("/");
  };

  return (
    <div className={styles.profileInfo}>
      <ul>
        <li onClick={handleProfile}>Profile</li>
        <li onClick={handleTasks}>Tasks List</li>
      </ul>
    </div>
  );
};

export default SideNavigation;
