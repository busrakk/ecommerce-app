import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLayout from "../layouts/user/UserLayout";
import swal from "sweetalert";
import useDelayCallback from "../components/helpers/useDelayCallback"

const UserRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("auth_token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      swal("Forbidden", "Forbidden", "warning");
      return navigate("/");
    }
    setIsLoggedIn(true);
  };

  useDelayCallback(() => {
    checkUserToken()
  }, [isLoggedIn])

  return <div>{isLoggedIn ? <UserLayout {...props} /> : null}</div>;
};

export default UserRoute;
