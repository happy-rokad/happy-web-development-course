import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [register, setfirst] = useState({ email: "", password: "" });
  const [eorr, seterr] = useState(null);

  const onchangeData = (e) => {
    setfirst({ ...register, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        console.log(result);
        if (result.error) {
          seterr(result.error);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        seterr(err.message);
      });
  };

  return (
    <>
      <h1> Register </h1>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="email">Email:</label>
        <input type="email" onChange={onchangeData} id="email" name="email" />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          onChange={onchangeData}
          id="password"
          name="password"
        />
        <br />
        <br />

        <input type="submit" value="submit" />
        {eorr && <p style={{ color: "red" }}> {eorr} </p>}
      </form>
    </>
  );
};

export default Register;
