import React from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

const Dashboard = () => {
  const navigate = useNavigate();

  const deleteData = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <button
        onClick={() => {
          deleteData();
        }}
        style={{
          backgroundColor: "blue",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
          padding: "10px 20px",
        }}
      >
        Logout
      </button>

      <br />
      <br />

      <div> Dashboard </div>
      <User />
    </>
  );
};

export default Dashboard;
