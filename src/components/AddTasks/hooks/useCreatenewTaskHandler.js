import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setAllUserTasks } from "../../../redux/actions";

const useCreatenewTaskHandler = ({ setUpdatedData }) => {
  const { id } = useParams();
  const taskData = useSelector((state) => state.applicationData.taskData) || [];
  const dispatch = useDispatch();

  // Find the task with the matching ID
  const task = taskData.find((task) => task._id === id);

  const handleAddTask = async (taskName) => {
    if (!task) return;

    try {
      // Create a new task item object
      const newTaskItem = {
        itemName: taskName,
        itemStatus: "not completed",
      };

      task.taskItems.push(newTaskItem);

      const data = taskData.filter((task) => {
        return task._id !== id;
      });
      data.push(task);
      setUpdatedData(task);
      dispatch(setAllUserTasks({ response: data }));

      // dispatch(addTaskItem(task._id, newTaskItem));

      // Optionally, you might want to update the UI or handle success/error
    } catch (error) {
      console.error("Error adding task item:", error);
    }
  };

  return { handleAddTask };
};

export default useCreatenewTaskHandler;
