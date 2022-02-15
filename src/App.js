import logo from "./logo.svg";
import "./App.css";
import Test from "./components/test";
import Dropdown from "./components/dropdown";
import { useState } from "react";
import MenuToggle from "./components/menutoggle";
import ArrowToggle from "./components/arrowtoggle";
import { motion, useCycle } from "framer-motion";

function App() {
  const [selected, setSelected] = useState("Select a value");
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      {/* <Test /> */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <br />
      <br />

      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <MenuToggle toggle={() => toggleOpen()} />

        <br />
        <br />
        <ArrowToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M 2 2.5 L 20 2.5"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M 2 9.423 L 20 9.423"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M 2 16.346 L 20 16.346"
        />
      </svg>
    </>
  );
}

export default App;
