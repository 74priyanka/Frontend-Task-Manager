import React, { useEffect, useRef, useState } from "react";
import makeUserDataApiCall from "../helpers/makeUserDataApiCall";
import { useDispatch } from "react-redux";

const useHomeHandler = () => {
  const dispatch = useDispatch();
  const userLoginDetails = useRef(
    localStorage.getItem("userLoginDetails") || null
  );
  const email =
    userLoginDetails.current && JSON.parse(userLoginDetails.current).email;

  const [isLoggedIn, setIsLoggedIn] = useState(false || !!email);
  console.log(userLoginDetails);

  makeUserDataApiCall(email, dispatch);

  return { isLoggedIn, setIsLoggedIn };
};

export default useHomeHandler;
