import React from "react";
import { Link } from "react-router-dom";

const Servicebox = (props) => {
  console.log(props);

  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6"  key={props.id}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="product">
        <div className="card w-100">
        <Link  to={`/vendor-service-detail/${props.event_service_form.id}`} >
          <img  src={`${props.event_service_form.imagesURL}/${props.event_service_form.images ? props.event_service_form.images.image_path: "default-service.png"}`} className="card-img-top  p-2" alt="default" />
          </Link>
          <div className="card-body">
          <h5 className="card-title"> {props.name.toUpperCase()}</h5>

            <div className="">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="review ms-2">560 Reviews</span>
            </div>
            <div className="">
              <span>
                <img alt="default" src="assets/img/guest.svg" />
              </span>
              <span className="ms-2 gust">500 Guests</span>
            </div>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicebox;
