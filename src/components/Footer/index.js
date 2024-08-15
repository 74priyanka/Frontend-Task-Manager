import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleCreateTask = () => {
    navigate("/createNewTask");
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.addButton} onClick={handleCreateTask}>
        +
      </button>
    </div>
  );
};

export default Footer;
