import logo from "./logo.svg";
import "./App.css";
import Test from "./components/test";
import Dropdown from "./components/dropdown";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <>
      {/* <Test /> */}
      <Dropdown selected={selected} setSelected={setSelected} />
    </>
  );
}

export default App;
