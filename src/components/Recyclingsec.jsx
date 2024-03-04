import React from "react";
import layer1 from "../assets/images/recyclelayer1.webp";
import layer2 from "../assets/images/recyclelayer2.webp";
import recycleimg from "../assets/images/recycleimg.webp";
import {
  Accordioniconfirst,
  Accordioniconsec,
  Accordioniconthird,
} from "./Icon";

const Recyclingsec = () => {
  return (
    <div
      id="how"
      className="bg-bluebg overflow-x-clip recycle position-relative overflow-x-clip pb-lg-210  py-md-153 py-sm-100  pt-lg-255 pt-60 z-1 "
    >
      <div className="container ">
        <div className="row ">
          <div className="col-lg-7 col-12" data-aos="fade-right">
            <h2 className="col-white pb-md-40 text-lg-start text-center mx-auto mx-lg-0 pb-sm-4 pb-3 fw-semibold  ff-outfit fs-52 lh-62 ">
              Recycling Has Never Been This Easy and Rewarding
            </h2>
            <div
              className="accordion d-flex justify-content-lg-start justify-content-center flex-column mx-auto mx-lg-0"
              id="accordionExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button d-flex"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className=" pe-20">
                      <Accordioniconfirst />
                    </span>{" "}
                    <span className="ff-outfit fs-24 lh-30 col-white fw-medium">
                      Exclusive Coupons & Rewards
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body pl-80 pt-0 col-lightwhite ff-outfit fw-normal max-w-483 fs-16 lh-24">
                    Cloopp partners with amazing brands to bring you coupons and
                    deals you simply can’t get anywhere else.{" "}
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {" "}
                    <span className="pe-20">
                      <Accordioniconsec />
                    </span>
                    <span className="ff-outfit fs-24 lh-30 col-white fw-medium">
                      Track Your Environmental Impact
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body  pl-80 pt-0 col-lightwhite ff-outfit fw-normal max-w-483 fs-16 lh-24">
                    Cloopp partners with amazing brands to bring you coupons and
                    deals you simply can’t get anywhere else.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span className=" pe-20">
                      <Accordioniconthird />
                    </span>
                    <span className="ff-outfit fs-24 lh-30 col-white fw-medium">
                      Feel Good
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body  pl-80 pt-0 col-lightwhite ff-outfit fw-normal max-w-483 fs-16 lh-24">
                    Cloopp partners with amazing brands to bring you coupons and
                    deals you simply can’t get anywhere else.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12" data-aos="fade-left">
            <img src={recycleimg} alt="recycleimg" className="w-xl-full" />
          </div>
        </div>
        <img src={layer1} alt="layer" className="recycletoplayer" />
        <img src={layer2} alt="layer3" className="recyclebottomlayer" />
      </div>
    </div>
  );
};

export default Recyclingsec;
