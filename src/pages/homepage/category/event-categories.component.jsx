import React from "react";
import "./events-section.styles.scss";
import CategoryBoxCarousel from "../../../components/category-box/category-box-carousel.component";

const classes = {
  rowClass: "row gy-3",
  colClass: "col-xl-3 col-lg-4 col-md-6 aos-init aos-animate",
};

const EventCategories = () => (
  <div>
    <section id="events" className="events mt-0">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title text-center">
          <h4 className="">Efficient booking</h4>
          <h3 className="">Plan the best event</h3>
        </div>
      </div>
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div
          id="carouselEventCategories"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <CategoryBoxCarousel newClasses={classes} ></CategoryBoxCarousel>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselEventCategories"
            data-bs-slide="prev"
          >
            <span className="" aria-hidden="true">
              <img src="assets/img/pre.png" alt="default" />
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselEventCategories"
            data-bs-slide="next"
          >
            <span className="" aria-hidden="true">
              <img src="assets/img/next.png" alt="default" />
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default EventCategories;
