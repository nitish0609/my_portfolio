import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4">
      <div className="container mx-auto">
        <p className="text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Nitish Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
