import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p>Coded with ❤️ by Vector &copy; {year}</p>
    </footer>
  );
};

export default Footer;
