import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import YesLogi from "./YesLogi";
import CheckLogin from "./CheckLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <YesLogi>
                <Login />
              </YesLogi>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <YesLogi>
                <Register />
              </YesLogi>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <CheckLogin>
                <Dashboard />
              </CheckLogin>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
