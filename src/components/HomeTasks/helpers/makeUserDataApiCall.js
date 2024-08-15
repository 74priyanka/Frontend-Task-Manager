import fetchWithBaseURL from "../../../apiServices/fetchWithBaseURL";
import { updateUserDataAction } from "../../../redux/actions";

// Example usage
const makeUserDataApiCall = async (email, dispatch) => {
  try {
    const response = await fetchWithBaseURL(
      `/profile/getProfile?email=${email}`
    );

    dispatch(updateUserDataAction(response));

    console.log("home response ", response);
  } catch (error) {}
};

export default makeUserDataApiCall;
