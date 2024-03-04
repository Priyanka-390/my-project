import React from "react";
import logo from "../assets/images/logo.webp";
const Preloader = () => {
  return (
    <div className="min-vh-100 bg-bluebg position-fixed animation flex-column overflow-hidden d-flex justify-content-center align-items-center top-0 left-0 right-0 w-100">
      <div className="position-relative d-flex justify-content-center align-items-center ">
        <img src={logo} alt="logo" />
      </div>
      <p className="ff-outfit col-white fs-64">Loading...</p>
    </div>
  );
};

export default Preloader;
