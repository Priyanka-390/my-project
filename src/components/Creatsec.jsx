import React from "react";
import createimg from "../assets/images/mobile.webp";
import createllips from "../assets/images/Creatingellipse.webp";

const myArray = [
  {
    text: 1,
    heading: "Scan The Barcode Before Recycling",
    para:
      "Open Cloopp, scan the product's barcode, and rack up points with every item you keep out of the landfill.",
  },
  {
    text: 2,
    heading: "Get Paid For Products You Use",
    para:
      "Get rewarded for doing the right thing. Your daily items – from plastics to cardboard and beyond – are connected to the Cloopp App.",
  },
  {
    text: 3,
    heading: "Reap The Rewards",
    para:
      "Earn exclusive coupons, promo codes, and cashback from the hottest brands and track your environmental impact.",
  },
];

const Creatsec = () => {
  const data = myArray.map((myArray, i) => (
    <div key={i} className="pb-md-4 pb-3">
      <div className="d-flex justify-content-md-start justify-content-center">
        <div className="circle d-flex justify-content-center align-items-center">
          <p className="mb-0 ff-outfit fs-32 fw-semibold lh-35 col-yellow">
            {myArray.text}
          </p>
        </div>
      </div>
      <p className=" ff-outfit text-md-start text-center mx-auto mx-md-0 fs-24 col-black lh-30 fw-medium pt-md-3 pt-sm-2 pt-1 mb-0">
        {myArray.heading}
      </p>
      <p className="mb-0 fs-16 text-md-start text-center mx-auto mx-md-0 ff-outfit fw-normal col-black lh-24 pt-1 max-w-471">
        {myArray.para}
      </p>
    </div>
  ));
  return (
    <div id="brand" className="bg-white overflow-x-clip position-relative z-1">
      <div className="container">
        <h2 className="col-black my-lg-5 my-sm-3 my-3 text-center ff-outfit fw-semibold fs-52 lh-62">
          Creating a Greener World Is
          <span className="d-md-block">Now As Easy As 1-2-3</span>
        </h2>
        <div className="row align-items-center pt-2 justify-content-around">
          <div className="col-md-4 col-12" data-aos="fade-right">
            <img src={createimg} alt="create" className="w-xl-full" />
          </div>
          <div className="col-md-6 col-12  pt-4" data-aos="fade-left">
            {data}
          </div>
        </div>
      </div>
      <img src={createllips} alt="create" className="createliipse" />
    </div>
  );
};

export default Creatsec;
