import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TheamContext from "./TheamContext";
import ChangeTheam from "./ChangeTheam";
import TheamSwisher from "./TheamSwisher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TheamContext>
        <TheamSwisher/>
        <ChangeTheam/>
      </TheamContext>
    </>
  );
}

export default App;
