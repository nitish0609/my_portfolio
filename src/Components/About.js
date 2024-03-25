// // About.js
// import React from "react";
// import { FaStar } from "react-icons/fa";

// const About = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-xl font-bold text-gray-700 mb-4">
//             Tech Knowledge
//           </h2>
//           <p className="text-gray-600">
//             I am proficient in various programming languages and frameworks such
//             as JavaScript, React.js, Node.js, HTML, CSS, and more. I also have
//             experience with database management systems like MySQL and MongoDB.
//             Additionally, I am skilled in version control using Git and GitHub.
//           </p>
//         </div>
//         <div>
//           <h2 className="text-xl font-bold text-gray-700 mb-4">Experience</h2>
//           <p className="text-gray-600">
//             Over the years, I have worked on numerous projects ranging from
//             small-scale web applications to large enterprise systems. My
//             experience includes front-end and back-end development, API
//             integrations, and responsive design implementation.
//           </p>
//         </div>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-xl font-bold text-gray-700 mb-4">Skills Rating</h2>
//         <div className="flex items-center">
//           <span className="mr-2 text-gray-600">React.js:</span>
//           <div className="flex">
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-gray-400" />
//           </div>
//         </div>
//         <div className="flex items-center mt-2">
//           <span className="mr-2 text-gray-600">Node.js:</span>
//           <div className="flex">
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-yellow-500" />
//             <FaStar className="text-gray-400" />
//             <FaStar className="text-gray-400" />
//           </div>
//         </div>
//         {/* Add more skills and ratings */}
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useState } from "react";
// import ReactRange from "react-range";
// import {
//   FaReact,
//   FaNodeJs,
//   FaPython,
//   FaDatabase,
//   FaJava,
//   FaRocket,
//   FaBrain,
// } from "react-icons/fa";
// import FlipMove from "react-flip-move";

const About = () => {
  const [proficiencies, setProficiencies] = useState({
    react: 0,
    node: 0,
    mongodb: 0,
    graphql: 0,
    java: 0,
    python: 0,
    machineLearning: 0,
  });

  // const handleChange = (key, value) => {
  //   setProficiencies((prev) => ({ ...prev, [key]: value }));
  // };

  return (
    <div className="container mx-auto py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg mb-4">
          I am a Senior Full Stack Developer at The Hosteller, where I apply my
          passion for technology to the hospitality industry. I create
          innovative web applications that enhance the guest experience, using
          React.js, Next.js, MongoDB, GraphQL, Node.js, and Express.
        </p>
        <p className="text-lg mb-4">
          Before joining The Hosteller, I worked as a Software Engineer at
          Wipro, developing Java microservices. I also have experience in Python
          and machine learning, having interned and worked at CDAC for 1.2
          years. There, I contributed to an Age Estimation project using CNNs,
          which was published in IEEE.
        </p>
        <p className="text-lg mb-4">
          I graduated with a Bachelor of Engineering degree in Information
          Technology from the University of Mumbai in 2021. I also hold
          certifications in Python programming, JavaScript programming, and
          Internet of Things from IIT Bombay, Microsoft, and NPTEL,
          respectively.
        </p>
        <p className="text-lg mb-4">
          Besides coding, I am passionate about photography and filmmaking. I
          strive to balance my professional and personal interests for a
          well-rounded life. I am always eager to learn new skills and
          technologies and to collaborate with others who share my enthusiasm.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Technology Proficiency</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* <FlipMove>
            {Object.entries(proficiencies).map(([tech, proficiency]) => (
              <div key={tech}>
                <h3 className="text-lg font-semibold mb-2">
                  {tech === "react" && <FaReact />}
                  {tech === "node" && <FaNodeJs />}
                  {tech === "mongodb" && <FaDatabase />}
                  {tech === "graphql" && <FaRocket />}
                  {tech === "java" && <FaJava />}
                  {tech === "python" && <FaPython />}
                  {tech === "machineLearning" && <FaBrain />}
                  {tech}
                  <span data-tip={`Proficiency: ${proficiency}`}>
                    {" "}
                    ({proficiency})
                  </span>
                </h3>
                <ReactRange
                  step={1}
                  min={0}
                  max={10}
                  values={[proficiency]}
                  onChange={(values) => handleChange(tech, values[0])}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        background: "#ddd",
                        borderRadius: "6px",
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#007BFF",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                        cursor: "pointer",
                      }}
                    />
                  )}
                />
              </div>
            ))}
          </FlipMove> */}
        </div>
      </div>
    </div>
  );
};

export default About;
