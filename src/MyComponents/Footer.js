import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "38vh",
    width: "100%",
    border: "2px solid red",
  };
  return (
    <footer className="bg-light text-dark py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyTodosList.com By Aditya</p>
    </footer>
  );
};
