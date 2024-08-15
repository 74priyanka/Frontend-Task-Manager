import styles from "./styles.module.css";

const TaskItem = () => {
  return (
    <form className={styles.todoFrom}>
      <input
        type="text"
        className={styles.todoInput}
        placeholder="What is the task today?"
      />
      <button type="submit" className={styles.todoBtn}>
        Add Task
      </button>
    </form>
  );
};

export default TaskItem;
