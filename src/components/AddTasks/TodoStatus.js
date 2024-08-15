import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./TodoStatus.module.css";

export const TodoStatus = () => {
  return (
    <div className={styles.TodoStatus}>
      <div>
        <FontAwesomeIcon
          className={styles.editIcon}
          icon={faPenToSquare}
          //   onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className={styles.deleteIcon}
          icon={faTrash}
          //   onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
