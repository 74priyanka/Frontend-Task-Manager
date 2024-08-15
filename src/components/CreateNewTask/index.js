import styles from "./styles.module.css";
import { AddTasksForm } from "../AddTasks/AddTasksForm";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import makeCreateNewTaskApiCall from "./makeCreateNewTaskApiCall";

const CreateNewTask = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.applicationData.userData);
  console.log(" USER DATA ", userData);
  const [formData, setFormData] = useState({
    taskName: "",
    userId: "",
    createdOn: "",
    lastUpdated: "",
    taskItems: [],
  });

  const [newTaskItem, setnewTaskItem] = useState();
  const handleTitleChange = (event) => {
    setFormData({
      ...formData,
      userId: userData._id,
      taskName: event.target.value,
      createdOn: new Date(),
      lastUpdated: new Date(),
    });
  };

  const handleSave = () => {
    // Save updated data to the state
    makeCreateNewTaskApiCall(formData);
    navigate("/");
  };

  const handleNewTaskItem = (event) => {
    setnewTaskItem(event.target.value);
  };

  const handleAddNewTask = async (event) => {
    event.preventDefault();
    setFormData({
      ...formData,
      taskItems: [
        ...formData.taskItems,
        { itemName: newTaskItem, itemStatus: "not completed" },
      ],
    });
  };
  console.log("form data lll", formData);
  return (
    <div className={styles.container}>
      <div className={styles.todoWrapper}>
        <input
          type="text"
          placeholder="Your Task Name"
          className={styles.taskName}
          value={formData.taskName}
          onChange={handleTitleChange}
        />
        <form className={styles.todoFrom} onSubmit={handleAddNewTask}>
          <input
            type="text"
            className={styles.todoInput}
            placeholder="What is the task today?"
            value={newTaskItem}
            onChange={handleNewTaskItem}
          />
          <button type="submit" className={styles.todoBtn}>
            Add Task
          </button>
        </form>

        <div className={styles.buttonContainer}>
          <button className={styles.deleteButton}>Delete</button>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewTask;
