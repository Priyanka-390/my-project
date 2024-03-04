import React from "react";
import appstore from "../assets/images/appstore.webp";
import gpay from "../assets/images/gpay.webp";
import headimg from "../assets/images/headerimg.webp";
import bottomlayer from "../assets/images/headerbottomlayer.webp";
import vector from "../assets/images/Vector.webp";
import herostar from "../assets/images/herostar.webp";
import heroellips from "../assets/images/heroellipse.webp";

const Headersec = () => {
  return (
    <div className="d-flex z-1 position-relative pt-lg-5 pt-md-4 pt-2 overflow-x-clip justify-content-center align-items-center overflow-x-clip flex-grow-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-12 pb-md-5 pb-3" data-aos="fade-right">
            <h1 className="ff-outfit text-lg-start text-center mx-auto mx-lg-0 max-w-616 fs-80 lh-100 col-white fw-semibold">
              Recycle.Reward.{" "}
              <span className="fw-normal lh-83 fs-64 ff-rainbow">
                with Cloopp
              </span>
            </h1>
            <p className="fs-16 col-lightwhite text-lg-start text-center mx-auto mx-lg-0 pt-lg-3 pt-sm-2 pt-1 pb-0 ff-outfit lh-24 fw-normal max-w-448">
              Get exclusive discounts and coupons from the hottest brands every
              time you recycle and track your environmental impact with the
              Cloopp App.
            </p>
            <div className="d-flex justify-content-lg-start justify-content-center gap-sm-3 gap-1 pt-lg-28 pt-md-20 pt-sm-3 pt-2">
              <a href="https://appstoreconnect.apple.com/login">
                <img
                  src={appstore}
                  alt="ap"
                  className="max-w-sm-180 cursor-pointer max-w-150"
                />
              </a>
              <a href="https://play.google.com/store/games?hl=en_IN&gl=US">
                <img
                  src={gpay}
                  alt="gpay"
                  className="max-w-sm-180 cursor-pointer max-w-150"
                />
              </a>
            </div>
          </div>
          <div
            className="col-lg-5 col-12 pb-md-4 pt-lg-0 pt-4"
            data-aos="fade-left"
          >
            <img src={headimg} alt="img" className="w-xl-full" />
          </div>
        </div>
      </div>
      <img src={bottomlayer} alt="layer" className="bottomlayer" />
      <img src={vector} alt="vec" className="vectorimg d-lg-block d-none" />
      <img src={herostar} alt="star" className="herostar" />
      <img src={heroellips} alt="hero" className="heroellips" />
    </div>
  );
};

export default Headersec;
