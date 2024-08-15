import fetchWithBaseURL from "../../apiServices/fetchWithBaseURL";

// Example usage
const makeCreateNewTaskApiCall = async (data) => {
  console.log(data);

  try {
    const response = await fetchWithBaseURL("/tasks/createTasks", "POST", data);
    console.log(response);
  } catch (error) {
    console.log("Error posting data:", error);
  }
};

export default makeCreateNewTaskApiCall;
