import fetchWithBaseURL from "../../apiServices/fetchWithBaseURL";

// Example usage
const makeSignupApiCall = async (data) => {
  console.log(data);
  try {
    const payload = {
      name: data.name,
      userName: data.username,
      password: data.password,
      email: data.email,
      contact: data.contact,
    };

    console.log(payload);

    const response = await fetchWithBaseURL("/auth/signup", "POST", payload);
    console.log(response);
  } catch (error) {
    console.log("Error posting data:", error);
  }
};

export default makeSignupApiCall;
