const baseURL = "http://localhost:3000";

const fetchWithBaseURL = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(`${baseURL}${endpoint}`, options);

  if (!response.ok) {
    const error = await response.text();
    const errorJson = JSON.parse(error);
    const errorMessage = errorJson.error || errorJson.message;

    console.log("response is : ", response.error);
    // alert(errorMessage);
  }

  return response.json();
};

export default fetchWithBaseURL;
