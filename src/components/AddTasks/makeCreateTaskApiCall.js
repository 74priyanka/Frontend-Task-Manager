import fetchWithBaseURL from "../../apiServices/fetchWithBaseURL";

// Example usage
const makeCreateTaskApiCall = async (data, taskId) => {
  console.log(data);

  try {
    const response = await fetchWithBaseURL(
      `/tasks/replaceTasks/${taskId}`,
      "PUT",
      data
    );
    console.log(response);
  } catch (error) {
    console.log("Error posting data:", error);
  }
};

export default makeCreateTaskApiCall;
