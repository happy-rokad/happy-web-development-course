import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setfirst] = useState({ email: "", password: "" });
  const [eorr, seterr] = useState(null);

  const navigate = useNavigate();

  const onchangeData = (e) => {
    setfirst({ ...login, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log(result);
        if (result.error) {
          seterr(result.error);
        } else {
          localStorage.setItem("token", result.token);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        seterr(err.message);
      });
  };

  return (
    <>
      <h1> Login </h1>
      <form action="" onSubmit={submitHandler}>
        <label for="email">Email:</label>
        <input type="email" onChange={onchangeData} id="email" name="email" />
        <br />
        <br />

        <label for="password">Password:</label>
        <input
          type="password"
          onChange={onchangeData}
          id="password"
          name="password"
        />
        <br />
        <br />

        <input type="submit" value="submit" />
        <Link to={"/register"}> Register </Link>
        {eorr && <p style={{ color: "red" }}> {eorr} </p>}
      </form>
    </>
  );
};

export default Login;
