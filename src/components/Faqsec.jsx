import React from "react";
import faqellipse from "../assets/images/faqellipse.webp";

const Faqsec = () => {
  return (
    <div id="Faq" className=" position-relative overflow-x-clip z-1">
      <div className="container ">
        <h2
          data-aos="zoom-in"
          className="text-center mx-auto fw-semibold fs-52 lh-62 pb-md-40 col-black ff-outfit"
        >
          Frequently Asked Questions
        </h2>
        <div
          className="accordion accordion-flush max-w-957 mx-auto faqsec"
          id="accordionFlushExample"
        >
          <div className="accordion-item" data-aos="zoom-in">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed ff-outfit col-black lh-30 fs-24 fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What products can I scan?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff-outfit fs-16 fw-normal lh-24 max-w-758 col-opblack">
                You can scan any product with a barcode before you recycle, no
                matter what it’s made of. Cloopp rewards you for your positive
                actions!
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="zoom-in">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed ff-outfit col-black lh-30 fs-24 fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Where can I use my rewards?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff-outfit fs-16 fw-normal lh-24 max-w-758 col-opblack">
                You can scan any product with a barcode before you recycle, no
                matter what it’s made of. Cloopp rewards you for your positive
                actions!
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="zoom-in">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed ff-outfit col-black lh-30 fs-24 fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What kind of impact can I make?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff-outfit fs-16 fw-normal lh-24 max-w-758 col-opblack">
                You can scan any product with a barcode before you recycle, no
                matter what it’s made of. Cloopp rewards you for your positive
                actions!
              </div>
            </div>
          </div>
          <div className="accordion-item" data-aos="zoom-in">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed ff-outfit col-black lh-30 fs-24 fw-medium"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Which brands do you partner with?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff-outfit fs-16 fw-normal lh-24 max-w-758 col-opblack">
                You can scan any product with a barcode before you recycle, no
                matter what it’s made of. Cloopp rewards you for your positive
                actions!
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={faqellipse} alt="ellipse" className="faqelips" />
    </div>
  );
};

export default Faqsec;
