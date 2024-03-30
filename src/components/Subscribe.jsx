import React from "react";
import toplayer from "../assets/images/subscribetoplayer.webp";
import bottomlayer from "../assets/images/subscribelayer2.webp";
import ellipseleft from "../assets/images/subscribeellipse1.webp";
import ellipseright from "../assets/images/subscribeellipse2.webp";

const Subscribe = () => {
  return (
    <div
      id="about"
      className="bg-bluebg position-relative overflow-x-clip z-1 py-lg-253 py-md-153 py-sm-100 py-70 position-relative z-1"
    >
      <div className="container py-xxl-5">
        <h2
          data-aos="zoom-in-down"
          className="text-center  mb-0 ff-outfit col-white fs-52 lh-62 fw-semibold" >
          Subscribe Newsletter
        </h2>
        <p
          data-aos="zoom-in-down"
          className=" fw-normal pb-md-40 pb-sm-4 pb-2 fs-16 mb-0 lh-24 ff-outfit col-lightwhite text-center pt-md-3 pt-2"
        >
          Subscribe to our newsletter for the latest news, offers, and eco-tips.
        </p>
        <form
          className="d-flex justify-content-between ps-3"
          data-aos="zoom-in-down"
        >
          <input
            type="text"
            placeholder="Enter your email "
            className="ff-outfit col-white bg-transparent outline-none border-none text-start w-100"
          />
          <div className=" d-flex justify-content-end">
            <input
              type="button"
              value="Join"
              className="bg-white col-blue fs-16 ff-outfit lh-24 hoverbtn  fw-semibold ms-2 border-none br-10 px-32 py-3"
            />
          </div>
        </form>
      </div>
      <img src={toplayer} alt="top" className="subscribetoplayer" />
      <img src={bottomlayer} alt="bottom" className="subscribebottomlayer" />
      <img
        src={ellipseleft}
        alt="left"
        className="subscribeeliipseleft d-md-block d-none"
      />
      <img src={ellipseright} alt="left" className="subscribeeliipseright" />
    </div>
  );
};
export default Subscribe;
