import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const YesLogi = ({ children }) => {
  const user = localStorage.getItem("token");

  return user ? <Navigate to={"/dashboard"}></Navigate> : children;
};

export default YesLogi;
