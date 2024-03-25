// import React from "react";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaCoffee,
//   FaCar,
//   FaLaptopCode,
// } from "react-icons/fa";

// // Import your photo

// import nitishPhoto from "../Components/Assests/nitishPhoto.jpg";

// const Home = () => {
//   return (
//     <div className="bg-gradient-to-r from-gray-900 to-gray-600 text-white py-20 px-6">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
//         {/* Image */}
//         {/* Image */}
//         <img
//           src={nitishPhoto}
//           alt="Nitish Pandey"
//           className="rounded-full h-auto w-50 md:w-auto md:max-w-2xl mb-4 md:mr-8 border-4 border-white"
//           style={{ maxHeight: "420px" }} // Adjust the maxHeight as needed
//         />

//         {/* Content */}

//         {/* Content */}
//         <div className="md:w-3/5 text-center md:text-left">
//           <h1 className="text-5xl font-bold mb-8 text-white">Nitish Pandey</h1>
//           <div className="mb-12 text-gray-300">
//             <p className="mb-4 font-semibold text-2xl">Well, Well, Well...</p>
//             <p className="mb-4 text-xl">
//               So, you've stumbled upon my little corner of the internet. Brace
//               yourself!
//             </p>
//             <p className="mb-4 text-xl">
//               I'm the coding ninja who dreams in JavaScript, has a car for every
//               day of the week, and believes caffeine is the elixir of life.
//             </p>
//             <p className="mb-4 text-xl">
//               Welcome to the wild and wonderful world of my imagination!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Category section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//         {/* Coding */}
//         <div className="text-center bg-gray-800 rounded-lg p-8">
//           <FaLaptopCode className="text-6xl mx-auto mb-4 text-gray-400" />
//           <h2 className="text-3xl font-bold mb-4">Coding</h2>
//           <p className="text-lg mb-4">
//             I have expertise in various programming languages and frameworks,
//             including JavaScript, React.js, Node.js, and more. I love solving
//             complex problems and building scalable applications.
//           </p>
//           <Link
//             to="/projects"
//             className="text-white hover:text-gray-400 transition duration-300"
//           >
//             See my projects →
//           </Link>
//         </div>

//         {/* Cars */}
//         <div className="text-center bg-gray-800 rounded-lg p-8">
//           <FaCar className="text-6xl mx-auto mb-4 text-gray-400" />
//           <h2 className="text-3xl font-bold mb-4">Cars</h2>
//           <p className="text-lg mb-4">
//             Cars are not just a means of transportation for me; they are my
//             passion. I enjoy learning about new automotive technologies,
//             exploring different car models, and attending car events.
//           </p>
//           <Link
//             to="/projects"
//             className="text-white hover:text-gray-400 transition duration-300"
//           >
//             Check out my favorite cars →
//           </Link>
//         </div>

//         {/* Coffee */}
//         <div className="text-center bg-gray-800 rounded-lg p-8">
//           <FaCoffee className="text-6xl mx-auto mb-4 text-gray-400" />
//           <h2 className="text-3xl font-bold mb-4">Coffee</h2>
//           <p className="text-lg mb-4">
//             Coffee fuels my coding sessions! I believe in the power of a good
//             cup of coffee to boost creativity and productivity. Let's grab a
//             coffee and chat about tech, cars, or anything else!
//           </p>
//           <Link
//             to="/contact"
//             className="text-white hover:text-gray-400 transition duration-300"
//           >
//             Let's connect over coffee →
//           </Link>
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="mt-12">
//         <Carousel
//           autoPlay
//           showArrows={false}
//           infiniteLoop
//           showStatus={false}
//           showIndicators={false}
//         >
//           <div>
//             <img
//               src="https://via.placeholder.com/600x300"
//               alt="carousel-img-1"
//             />
//           </div>
//           <div>
//             <img
//               src="https://via.placeholder.com/600x300"
//               alt="carousel-img-2"
//             />
//           </div>
//           <div>
//             <img
//               src="https://via.placeholder.com/600x300"
//               alt="carousel-img-3"
//             />
//           </div>
//         </Carousel>
//       </div>

//       {/* Button to view projects */}
//       <div className="flex justify-center mt-12">
//         <Link
//           to="/projects"
//           className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300"
//         >
//           View Projects
//         </Link>
//       </div>

//       {/* Social icons */}
//       <div className="flex justify-center mt-8">
//         <a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white hover:text-gray-400 mx-4"
//         >
//           <FaGithub className="text-4xl" />
//         </a>
//         <a
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-white hover:text-gray-400 mx-4"
//         >
//           <FaLinkedin className="text-4xl" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import {
  FaGithub,
  FaLinkedin,
  FaCoffee,
  FaCar,
  FaLaptopCode,
  FaInstagram,
} from "react-icons/fa";

// Import your photo
import nitishPhoto from "../Components/Assests/nitishPhoto.jpg";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-600 text-white py-20 px-9">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image */}
        <img
          src={nitishPhoto}
          alt="Nitish Pandey"
          className="rounded-full h-auto w-50 md:w-auto md:max-w-2xl mb-4 md:mr-8 border-4 border-white"
          style={{ maxHeight: "420px" }} // Adjust the maxHeight as needed
        />

        {/* Content */}
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-8 text-white">Nitish Pandey</h1>
          <div className="mb-12 text-gray-300">
            <p className="mb-4 font-semibold text-2xl">
              Hey there, fellow human!
            </p>
            <p className="mb-4 text-xl">
              Welcome to my little corner of the internet. Here you'll find a
              concoction of code, coffee, and car talk.
            </p>
            <p className="mb-4 text-xl">
              I'm the tech wizard who codes with one hand and sips coffee with
              the other. If you catch me staring at my screen, I'm probably just
              conversing with my code.
            </p>
            <p className="mb-4 text-xl">
              So, grab a cup of your favorite brew, buckle up, and let's embark
              on a journey through the realms of technology, automotive wonders,
              and caffeine-fueled adventures!
            </p>
          </div>
        </div>
      </div>

      {/* Category section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Coding */}
        <div className="text-center bg-gray-800 rounded-lg p-8">
          <FaLaptopCode className="text-6xl mx-auto mb-4 text-gray-400" />
          <h2 className="text-3xl font-bold mb-4">Coding</h2>
          <p className="text-lg mb-4">
            I have expertise in various programming languages and frameworks,
            including JavaScript, React.js, Node.js, and more. I love solving
            complex problems and building scalable applications.
          </p>
          <Link
            to="/projects"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            See my projects →
          </Link>
        </div>

        {/* Cars */}
        <div className="text-center bg-gray-800 rounded-lg p-8">
          <FaCar className="text-6xl mx-auto mb-4 text-gray-400" />
          <h2 className="text-3xl font-bold mb-4">Cars</h2>
          <p className="text-lg mb-4">
            Cars are not just a means of transportation for me; they are my
            passion. I enjoy learning about new automotive technologies,
            exploring different car models, and attending car events.
          </p>
          <Link
            to="/projects"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Check out my favorite cars →
          </Link>
        </div>

        {/* Coffee */}
        <div className="text-center bg-gray-800 rounded-lg p-8">
          <FaCoffee className="text-6xl mx-auto mb-4 text-gray-400" />
          <h2 className="text-3xl font-bold mb-4">Coffee</h2>
          <p className="text-lg mb-4">
            Coffee fuels my coding sessions! I believe in the power of a good
            cup of coffee to boost creativity and productivity. Let's grab a
            coffee and chat about tech, cars, or anything else!
          </p>
          <Link
            to="/contact"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            Let's connect over coffee →
          </Link>
        </div>
      </div>

      {/* Unique Slider */}

      {/* Button to view projects */}
      <div className="flex justify-center mt-12">
        <Link
          to="/projects"
          className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-300 transition duration-300"
        >
          View Projects
        </Link>
      </div>

      {/* Social icons */}
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/nitish0609"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 mx-4"
        >
          <FaGithub className="text-4xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/nitish-pandey-70a21016a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 mx-4"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href="https://www.instagram.com/accounts/onetap/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 mx-4"
        >
          <FaInstagram className="text-4xl" />
        </a>
      </div>
    </div>
  );
};

export default Home;
