import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useAddTaskHandler = () => {
  const { id } = useParams(); // Get the ID from the URL
  const taskData = useSelector((state) => state.applicationData.taskData) || [];
  console.log("redux task data : : ", taskData);
  // Find the task with the matching ID
  const task = taskData.find((task) => task._id === id);

  console.log("Selected task data ===> ", task);

  return {
    task,
    id,
  };
};

export default useAddTaskHandler;
