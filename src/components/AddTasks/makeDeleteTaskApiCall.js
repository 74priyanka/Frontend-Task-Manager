import fetchWithBaseURL from "../../apiServices/fetchWithBaseURL";

// Example usage
const makeDeleteTaskApiCall = async (taskId) => {
  try {
    const response = await fetchWithBaseURL(
      `/tasks/deleteTasks/${taskId}`,
      "DELETE"
    );
    console.log(response);
  } catch (error) {
    console.log("Error posting data:", error);
  }
};

export default makeDeleteTaskApiCall;
