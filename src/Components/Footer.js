import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();
  return <p>Copyright © {year} Marcin Kośka</p>;
};

export default Footer;
