import React, { useState } from "react";
// import styles from "./EditTasks.module.css";
import styles from "./AddTasksForm.module.css";

export const EditTasks = () => {
  return (
    <form className={styles.todoFrom}>
      <input
        type="text"
        className={styles.todoInput}
        placeholder="update task"
      />
      <button type="submit" className={styles.todoBtn}>
        update Task
      </button>
    </form>
  );
};
