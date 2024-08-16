import styles from "./styles.module.css";
import TaskCard from "../../reusableComponents/TaskCard";
import useTaskListsHandler from "./hooks/useTaskListsHandler";
import { useNavigate } from "react-router-dom";

const TaskLists = () => {
  const { tasks } = useTaskListsHandler();
  const navigate = useNavigate();
  const handleCreateTask = (id) => {
    navigate(`/addTask/${id}`);
  };

  return (
    <div className={styles.taskList}>
      <h3 className={styles.taskListHeader}>All Task Lists</h3>
      <div className={styles.taskCardsSection}>
        {Array.isArray(tasks) && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              id={task._id}
              itemName={task.taskItems.map((item) => item.itemName).join(", ")}
              taskName={task.taskName}
              clickHandler={handleCreateTask}
              className={styles.taskCard}
              // Add other props as needed
            />
          ))
        ) : (
          <p>No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default TaskLists;
