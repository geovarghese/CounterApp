import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Vue", "Angular"];
  const [toggleDropDown, cycleToggleDropDown] = useCycle(
    "dropdownItemVariants",
    "dropdownItemCollapseVariants"
  );

  const svgDownVariants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 180,
      transition: {
        duration: 1,
      },
    },
  };

  const svgUpVariants = {
    hidden: { rotate: 180 },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const dropdownVariants = {
    hidden: { height: 0 },
    visible: {
      height: 200,
      transition: {
        duration: 1,
      },
    },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const dropdownItemCollapseVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div className="dropdown">
          {/* <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrowDown"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrowDown"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </div> */}

          <div
            className="dropdown-btn"
            onClick={(e) => {
              setIsActive(!isActive);
              cycleToggleDropDown();
            }}
          >
            {selected}

            {isActive ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                variants={svgDownVariants}
                initial="hidden"
                animate="visible"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            ) : (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                variants={svgUpVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                  variants={pathVariants}
                />
              </motion.svg>
            )}
          </div>

          {isActive && (
            <motion.div
              className="dropdown-content"
              variants={toggleDropDown}
              initial="hidden"
              animate="visible"
            >
              {options.map((option) => (
                <motion.div
                  key={option}
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                  className="dropdown-item"
                  variants={dropdownItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {option}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
}

export default Dropdown;
