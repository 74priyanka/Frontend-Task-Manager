import React, { useState } from "react";
import styles from "./AddTasksForm.module.css";
import useCreatenewTaskHandler from "./hooks/useCreatenewTaskHandler";

export const AddTasksForm = ({ setUpdatedData }) => {
  const { handleAddTask } = useCreatenewTaskHandler({ setUpdatedData });

  // State to keep track of the input value
  const [task, setTask] = useState("");

  // Function to handle input change
  const handleChange = (event) => {
    setTask(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    handleAddTask(task);
  };

  return (
    <form className={styles.todoFrom} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.todoInput}
        placeholder="What is the task today?"
        value={task}
        onChange={handleChange}
      />
      <button type="submit" className={styles.todoBtn}>
        Add Task
      </button>
    </form>
  );
};
