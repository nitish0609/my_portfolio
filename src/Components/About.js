import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="container mx-auto p-4">
      <motion.h2
        initial="initial"
        animate="animate"
        variants={variants}
        className="text-4xl font-extrabold text-gray-800 mb-4"
      >
        About Me
      </motion.h2>

      <motion.p
        initial="initial"
        animate="animate"
        variants={variants}
        className="text-lg text-gray-600 mb-4"
      >
        I'm Nitish Pandey, a Full Stack Developer with a passion for coding,
        sipping coffee, taking photos, and cars. I bring 2 years of experience
        to the table. I spent 1 year as a software engineer at Wipro and now
        work as a Full Stack Developer at The Hosteller. I completed my Bachelor
        of Engineering in Information Technology in 2021.
      </motion.p>
    </div>
  );
};

export default About;
