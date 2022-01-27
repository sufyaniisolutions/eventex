import React from "react";

import ServiceNav from "../../../components/service-navs/service-nav.component";
import Servicebox from "../../../components/service-box/service-box.component";
import { Link } from "react-router-dom";

class VendorServices extends React.Component {
  
  constructor() {
    super();
    this.state = {
      services: [
        {
          title: "Venues",
          id: 1,
          setActive: "active",
        },
        {
          title: "Food & Beverages",
          id: 2,
        },
        {
          title: "Equipment & Decor",
          id: 3,
        },
        {
          title: "Photo & Video",
          id: 4,
        },
        {
          title: "Staffing",
          id: 5,
        },
        ,
        {
          title: "Transport",
          id: 6,
        },
      ],
      sections: [
        {
          title: "Gotham Hall",
          imageUrl: "assets/img/ser-1.png",
          id: 1,
        },
        {
          title: "Suspendisse Cursus",
          imageUrl: "assets/img/ser-2.png",
          id: 2,
        },
        {
          title: "Donec Euismod",
          imageUrl: "assets/img/ser-3.png",
          id: 3,
        },
        {
          title: "Mauris Semper",
          imageUrl: "assets/img/ser-4.png",
          size: "large",
          id: 4,
        }
      ],
      vendorService: [],
    };
  }
  

  componentDidMount() {
    fetch(
      "http://localhost:8080/EventManagement/public/api/services?per_page=8"
    )
      .then((response) => response.json())
      .then((result) => this.setState({ vendorService: result.data }));
  }

  render() {
    return (
      <div>
         <section id="discover" className="discover mt-0">
      <div className="container" data-aos="fade-up">

        <div className="section-title text-center">
          <h4 className="">Discover suppliers</h4>
          <h3 className="">We’ll make your next celebration
            very special!</h3>
          <div className="d-flex justify-content-center">
            <ul className="nav nav-pills nav-fill flex-column flex-md-row" id="tabs-text" role="tablist">
              <li className="nav-item">
                <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-text-1-tab" data-bs-toggle="tab" href="#tabs-text-1"
                  role="tab" aria-controls="tabs-text-1" aria-selected="true">Venues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-bs-toggle="tab" href="#tabs-text-2"
                  role="tab" aria-controls="tabs-text-2" aria-selected="false">Food & Beverages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-bs-toggle="tab" href="#tabs-text-3"
                  role="tab" aria-controls="tabs-text-3" aria-selected="false">Equipment & Decor</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-bs-toggle="tab" href="#tabs-text-4"
                  role="tab" aria-controls="tabs-text-3" aria-selected="false">Photo & Video</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-bs-toggle="tab" href="#tabs-text-5"
                  role="tab" aria-controls="tabs-text-3" aria-selected="false">Staffing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-bs-toggle="tab" href="#tabs-text-6"
                  role="tab" aria-controls="tabs-text-3" aria-selected="false">Transport</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container" data-aos="fade-up">
          <div className="tab-content" id="tabcontent1">
            <div className="tab-pane fade show active" id="tabs-text-1" role="tabpanel" aria-labelledby="tabs-text-1-tab">
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row gy-3">
                    {this.state.vendorService.slice(0, 4).map((currElement, index) => (
                      <Servicebox key={index} {...currElement} />
                          ))}
      
                    </div>

                  </div>
                  
                  <div className="carousel-item">
                    <div className="row gy-3">
                    {this.state.vendorService.slice(4, 8).map((currElement, index) => (

                      <div className="col-xl-3 col-lg-4 col-md-6" key={currElement.id} data-aos="fade-up" data-aos-delay="100">
                        <div className="product">
                          <div className="card w-100">
                            <a href="#"><img src={`${currElement.event_service_form.imagesURL}/${currElement.event_service_form.images ? currElement.event_service_form.images.image_path: "default-service.png"}`} className="card-img-top  p-2" alt="default" /></a>
                            <div className="card-body">
                              <h5 className="card-title"> {currElement.name.toUpperCase()}</h5>

                              <div className="">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <span className="review ms-2">
                                  560 Reviews
                                </span>
                              </div>
                              <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="ms-2 gust">500
                                  Guests</span>
                              </div>
                              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                            </div>
                          </div>
                        </div>
                      </div>

))}
                    </div>
                  </div>
                </div>
                <button className="cat-carousel carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
                  <span className="" aria-hidden="true"><img src="assets/img/pre.png" alt="default" /></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="cat-carousel carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
                  <span className="" aria-hidden="true"><img src="assets/img/next.png" alt="default" /></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="tab-pane fade" id="tabs-text-2" role="tabpanel" aria-labelledby="tabs-text-2-tab">
              <div className="row gy-3">
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-1.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Gotham Hall</h5>

                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="ms-2 gust">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-2.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Suspendisse Cursus</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-3.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Donec Euismod</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-4.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Mauris Semper</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tabs-text-3" role="tabpanel" aria-labelledby="tabs-text-3-tab">
              <div className="row gy-3">
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-1.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Gotham Hall</h5>

                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="ms-2 gust">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-2.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Suspendisse Cursus</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-3.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Donec Euismod</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg"alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-4.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Mauris Semper</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tabs-text-4" role="tabpanel" aria-labelledby="tabs-text-4-tab">
              <div className="row gy-3">
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-1.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Gotham Hall</h5>

                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="ms-2 gust">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-2.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Suspendisse Cursus</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-3.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Donec Euismod</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-4.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Mauris Semper</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tabs-text-5" role="tabpanel" aria-labelledby="tabs-text-5-tab">
              <div className="row gy-3">
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-1.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Gotham Hall</h5>

                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="ms-2 gust">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-2.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Suspendisse Cursus</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-3.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Donec Euismod</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-4.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Mauris Semper</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tabs-text-6" role="tabpanel" aria-labelledby="tabs-text-6-tab">
              <div className="row gy-3">
                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-1.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Gotham Hall</h5>

                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="ms-2 gust">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-2.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Suspendisse Cursus</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-3.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Donec Euismod</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg" alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                  <div className="product">
                    <div className="card w-100">
                      <a href="#"><img src="assets/img/ser-4.png" className="card-img-top  p-2" alt="default" /></a>
                      <div className="card-body">
                        <h5 className="card-title">Mauris Semper</h5>
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                          <span className="review ms-2">
                            560 Reviews
                          </span>
                        </div>
                        <div className=""><span><img src="assets/img/guest.svg"  alt="default" /></span><span className="gust ms-2">500
                            Guests</span>
                        </div>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="button d-flex flex-column align-items-center justify-content-center pt-4">
            <button type="button" className="btn btn-outline-secondary">View More
            </button>
          </div>
        </div>
      </div>
    </section>
      </div>
    );
  }
}
export default VendorServices;
