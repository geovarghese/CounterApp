import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Vue", "Angular"];
  const [toggleDropDown, cycleToggleDropDown] = useCycle(
    "dropdownVariants",
    "dropdownUpVariants"
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
      height: 150,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
    exit: {
      height: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
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
            className="dropdown-btn "
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
                  // variants={pathVariants}
                />
              </motion.svg>
            )}
          </div>
          <AnimatePresence exitBeforeEnter>
            {isActive && (
              <motion.div
                className="dropdown-content"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
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
                  >
                    {option}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AnimatePresence>
    </>
  );
}

export default Dropdown;
