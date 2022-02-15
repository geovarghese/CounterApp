import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function ArrowToggle({ toggle }) {
  return (
    <>
      <button onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          {/* <Path
            variants={{
              closed: { d: "M19 9l-7 7-7-7" },
              open: { d: "M5 15l7-7 7 7" },
            }}
            transition={{ duration: 0.7 }}
          /> */}
          <Path
            d="M19 9l-7 7-7-7"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            d="M9 5l7 7-7 7"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            d="M5 15l7-7 7 7"
            variants={{
              closed: { opacity: 0 },
              open: { opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
          />

          {/* <Path
            d="M15 19l-7-7 7-7"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          /> */}
          {/* <Path
            variants={{
              closed: { d: "M19 9l-7 7-7-7" },
              open: { d: "M5 15l7-7 7 7" },
            }}
          /> */}
        </svg>
      </button>
    </>
  );
}
