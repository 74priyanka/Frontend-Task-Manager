import fetchWithBaseURL from "../../apiServices/fetchWithBaseURL";
import { setAllUserTasks } from "../../redux/actions";

// Example usage
const makeAllTaskListsApiCall = async (userId, dispatch) => {
  try {
    const response = await fetchWithBaseURL(`/tasks/getTasks/${userId}`);

    dispatch(setAllUserTasks(response));
    console.log("task response ", response);
  } catch (error) {}
};

export default makeAllTaskListsApiCall;
