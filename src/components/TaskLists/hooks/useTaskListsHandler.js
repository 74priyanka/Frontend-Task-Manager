import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import makeAllTaskListsApiCall from "../makeAllTaskListsApiCall";

const useTaskListsHandler = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.applicationData.userData);
  const taskData = useSelector((state) => state.applicationData.taskData) || []; // Default to empty array

  useEffect(() => {
    if (userData?._id) {
      makeAllTaskListsApiCall(userData._id, dispatch);
    }
  }, [userData, dispatch]);

  return {
    tasks: taskData, // Return taskData, which defaults to an empty array
  };
};

export default useTaskListsHandler;
