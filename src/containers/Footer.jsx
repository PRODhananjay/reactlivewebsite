import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-1.5 px-lg-8 flex items-center justify-center">
      <section className="text-center">
        Copyright © {new Date().getFullYear()} -Dynamic World Education
        Community - All Rights Reserved
      </section>
    </footer>
  );
};

export default Footer;
