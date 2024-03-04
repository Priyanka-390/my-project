import React from "react";
import footerlogo from "../assets/images/footerlogo.webp";
import { Facebook, Insta, Telegram, Twitter } from "./Icon";

const Footer = () => {
  const Dates = new Date();
  const year = Dates.getFullYear();
  return (
    <div>
      <div className="bg-baseblack pt-lg-5 pt-md-3 pt-2">
        <div className="container pb-lg-80 pb-lg-5 pb-md-4 pb-sm-3 pb-2">
          <div className="row pb-lg-5 pb-0">
            <div className="col-lg-5 mb-4 mb-sm-5 mb-lg-0">
              <img
                src={footerlogo}
                alt="logo"
                className="mb-3 cursor-pointer"
              />
              <p className="ff-outfit col-lightwhite fs-16 lh-24 fw-normal max-w-345  mb-0">
                Cloopp revolutionizes recycling for everyone. Join, earn, and
                support sustainability.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-4 col-6 d-flex justify-content-lg-end mb-4 mb-sm-5 mb-md-0">
                  <ul className="mb-0 ps-0">
                    <li className="mb-sm-3 mb-2">
                      <a
                        href="#about"
                        className="col-lightwhite text-decoration-none ff-outfit fs-16 lh-17 fw-normal  footerhover"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mb-sm-3 mb-2">
                      <a
                        href="#how"
                        className="col-lightwhite ff-outfit text-decoration-none fs-16 lh-17 fw-normal footerhover"
                      >
                        How It Works
                      </a>
                    </li>
                    <li className="mb-sm-3 mb-2">
                      <a
                        href="#brand"
                        className="col-lightwhite ff-outfit text-decoration-none fs-16 lh-17 fw-normal footerhover"
                      >
                        For Brands
                      </a>
                    </li>
                    <li>
                      <a
                        href="#Faq"
                        className="col-lightwhite ff-outfit text-decoration-none fs-16 lh-17 fw-normal footerhover"
                      >
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6 d-flex justify-content-lg-end">
                  <ul className="mb-0 ps-0">
                    <li className="mb-sm-3 mb-2">
                      <a
                        href="#"
                        className="col-lightwhite ff-outfit text-decoration-none fs-16 lh-17 fw-normal footerhover"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="col-lightwhite ff-outfit text-decoration-none fs-16 lh-17 fw-normal footerhover"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 d-flex justify-content-lg-end">
                  <div className="pt-0">
                    <p className="col-lightwhite ff-outfit fs-16 lh-17 fw-normal opacity-80 mb-12">
                      Follow Us{" "}
                    </p>
                    <div className="d-flex gap-10">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="icons"
                      >
                        <div className="box d-flex justify-content-center align-items-center">
                          <Insta />
                        </div>
                      </a>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        className="icons"
                      >
                        <div className="box d-flex justify-content-center align-items-center">
                          <Facebook />
                        </div>
                      </a>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        className="icons"
                      >
                        <div className="box d-flex justify-content-center align-items-center">
                          <Twitter />
                        </div>
                      </a>
                      <a
                        href="https://telegram.org/"
                        target="_blank"
                        className="icons"
                      >
                        <div className="box d-flex justify-content-center align-items-center">
                          <Telegram />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footline"></div>
        <div className="container">
          <p className="col-lightwhite ff-outfit fs-14  lh-15 fw-normal mb-0 text-center py-14">
            © {year} Cloopp
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
