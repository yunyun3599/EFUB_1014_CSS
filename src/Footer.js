import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      &copy; {new Date().getFullYear()} EFUB
    </div>
  );
};

export default Footer;
