import styles from "./styles.module.css";
import clickMe from "../../assets/clickMe.png";

const TaskCard = ({ taskName, clickHandler, id }) => {
  return (
    <div className={styles.taskCard} onClick={() => clickHandler(id)}>
      <div className={styles.taskItem}>
        <h1>{taskName}</h1>
        <img src={clickMe} alt="" />
      </div>
    </div>
  );
};

export default TaskCard;
