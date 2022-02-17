import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ChildrenStag() {
  return (
    <motion.div
      className="children"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="block h-10 w-50 p-2 ml-10 bg-slate-500 rounded-lg mb-3 text-white"
        variants={item}
      >
        1
      </motion.div>
      <motion.div
        className="block h-10 w-50 p-2 ml-10 bg-slate-500 rounded-lg mb-3 text-white"
        variants={item}
      >
        2
      </motion.div>
      <motion.div
        className="block h-10 w-50 p-2 ml-10 bg-slate-500 rounded-lg mb-3 text-white"
        variants={item}
      >
        3
      </motion.div>
      <motion.div
        className="block h-10 w-50 p-2 ml-10 bg-slate-500 rounded-lg mb-3 text-white"
        variants={item}
      >
        4
      </motion.div>
      <motion.div
        className="block h-10 w-50 p-2 ml-10 bg-slate-500 rounded-lg mb-3 text-white"
        variants={item}
      >
        5
      </motion.div>
    </motion.div>
  );
}
