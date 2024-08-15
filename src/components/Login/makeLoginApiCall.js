import fetchWithBaseURL from "../../apiServices/fetchWithBaseURL";

// Example usage
const makeLoginApiCall = async (data, setIsLoggedIn) => {
  console.log(data);
  try {
    const payload = {
      password: data.password,
      email: data.email,
    };

    console.log(payload);

    const response = await fetchWithBaseURL("/auth/login", "POST", payload);
    console.log("response : ", response);
    const loginDetail = {
      email: data.email,
      token: response.token,
    };
    setIsLoggedIn(true);
    localStorage.setItem("userLoginDetails", JSON.stringify(loginDetail));
  } catch (error) {}
};

export default makeLoginApiCall;
