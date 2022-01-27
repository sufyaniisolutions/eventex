import React from "react";
import { Link } from "react-router-dom";

const VendorServiceImages = (props) => {
  console.log(props);

  return (
    <div className="col-sm-6 col-md-6 col-xs-6 pt-4">
              <img  src={`${props.imagesURL}/${props.images ? props.images[0].image_path: "default-service.png"}`}  className="w-100"    alt="default"  />
              <div className="row">
                <div className="col-md-3 ">
                  <img
                    className="mt-2"
                    src="assets/img/page 3/2.svg"
                    alt="default"
                  />
                </div>
                <div className=" col-md-3 ">
                  <img
                    className="mt-2"
                    src="assets/img/page 3/3.svg"
                    alt="default"
                  />
                </div>
                <div className="col-md-3 ">
                  <img
                    className="mt-2"
                    src="assets/img/page 3/4.svg"
                    alt="default"
                  />
                </div>
                <div className=" col-md-3 mt-2 d">
                  <a href="#about" className=" ">
                    View All
                  </a>
                </div>
              </div>
            </div>
  );
};

export default VendorServiceImages;
