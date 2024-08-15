// TaskList.js
import React, { useState } from "react";

import styles from "./AddTasks.module.css";
import { AddTasksForm } from "./AddTasksForm";
import useAddTaskHandler from "./hooks/useAddTaskHandler";
import makeCreateTaskApiCall from "./makeCreateTaskApiCall";
import makeDeleteTaskApiCall from "./makeDeleteTaskApiCall";
import { useNavigate } from "react-router-dom";

const AddTasks = () => {
  const { task, id } = useAddTaskHandler();
  const [updatedData, setUpdatedData] = useState();
  const navigate = useNavigate();

  const handleSave = () => {
    // Save updated data to the state
    makeCreateTaskApiCall(updatedData, id);
    navigate("/");
  };

  const handleDelete = () => {
    // Save updated data to the state
    makeDeleteTaskApiCall(id);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.todoWrapper}>
        {task.taskName ? (
          <h1>{task.taskName}</h1>
        ) : (
          <input
            type="text"
            placeholder="Your Task Name"
            className={styles.taskName}
          />
        )}

        <AddTasksForm setUpdatedData={setUpdatedData} />
        {task.taskItems.map((taskItem) => (
          <div className={styles.taskItem}>
            <span>{taskItem.itemName}</span>
            <span>{taskItem.itemStatus}</span>
          </div>
        ))}

        <div className={styles.buttonContainer}>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTasks;
