import React from "react";
import { motion } from "framer-motion";
import Subject from "../Components/Assests/Subject.jpg";
import "../../src/styles.css";

const Home = () => {
  const variants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageStyles = {
    width: "270px",
    height: "300px",
    borderRadius: "50%",
  };

  return (
    <div className="container  mx-auto p-4 flex justify-between items-center">
      <div className="w-1/2">
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className="w-full text-center"
        >
          <img src={Subject} alt="Nerdy Boy Doodle" style={imageStyles} />
        </motion.div>
      </div>

      <div className="w-1/2">
        <motion.h2
          initial="initial"
          animate="animate"
          variants={variants}
          className="text-4xl font-semibold text-black mb-4"
          style={{ fontFamily: "Magic Retro" }}
        >
          Hello!
        </motion.h2>

        <motion.p
          initial="initial"
          animate="animate"
          variants={variants}
          className="text-lg text-black mb-4"
        >
          I'm Nitish Pandey, a Full Stack Developer with a passion for coding,
          sipping coffee, taking photos, and cars! You could say I'm a bit nerdy
          about it 😄.
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
