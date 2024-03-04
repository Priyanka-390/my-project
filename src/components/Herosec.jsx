import React, { useState } from "react";
import logo from "../assets/images/logo.webp";

const Herosec = () => {
  const [show, setshow] = useState(true);
  if (show === false) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }
  return (
    <nav className="bg-nav py-13 position-relative z-3">
      <div className="container">
        <div className=" d-flex align-items-center justify-content-between">
          <img src={logo} alt="Logo" className=" cursor-pointer" />
          <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
            <li onClick={() => setshow(!show)}>
              <a
                className=" col-lightwhite ff-outfit fs-16 list-unstyled text-decoration-none fw-normal lh-17  nav_line position-relative"
                href="#how"
              >
                How It Works
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                className=" col-lightwhite ff-outfit fs-16 fw-normal lh-17 text-decoration-none nav_line position-relative"
                href="#brand"
              >
                For Brands
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                className=" col-lightwhite ff-outfit fs-16 fw-normal text-decoration-none lh-17 nav_line position-relative"
                href="#about"
              >
                About Us
              </a>
            </li>
            <li onClick={() => setshow(!show)}>
              <a
                className=" col-lightwhite ff-outfit fs-16 fw-normal lh-17  text-decoration-none nav_line position-relative"
                href="#Faq"
              >
                Careers
              </a>
            </li>
          </ul>
          <div
            onClick={() => setshow(!show)}
            className={`${show ? "" : "cross"} navline`}
          >
            <span className="crl-1"></span>
            <span className="crl-2"></span>
            <span className="crl-3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Herosec;
