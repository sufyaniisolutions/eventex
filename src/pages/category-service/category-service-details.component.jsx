import React from "react";

const CategoryServiceDetails = () => (
  <div>
   <section className="breadcrumbs">

      <div className="container-fluid">
          <div className=" ">
              <div className="row">
                  <div className="col-md-6 left ">
                      <div className="card card-bdy">
                          <div className="card-body">
                              <div className="d-flex justify-content-between">
                                  <div className="">
                                      <h3 className="card-title card-title-body">Wedding/Halls</h3>
                                  </div>
                                  <div className="form-check form-switch form-check-custom form-check-solid d-flex justify-content-end">
                                      <input className="form-check-input h-30px w-50px" type="checkbox" value="" id="flexSwitch30x50"/>

                                  </div>
                              </div>
                              <div className="btn-sm-cardbody mb-3">
                                  <button type="button" className="btn btn-outline-dark btn-sm btn-sm-card" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      <i className="bi bi-geo-alt-fill"></i> Miami
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

                                      <div className="mb-3 p-3">
                                          <label for="exampleFormControlInput1" className="form-label">Select Your
                                              City:</label>
                                          <input type="email" className="form-control w-75 mb-2" id="exampleFormControlInput1" placeholder="25737 US Rt 11" />
                                          <p className="card-label  mb-1 text-muted">e.g. Montreal, Vancouver, New York,
                                              San Francisco</p>
                                      </div>
                                      <div className="d-flex justify-content-between">
                                          <button type="button" className="btn-3 btn ms-3">Cancel</button>
                                          <button type="button" className="btn-2 btn me-3">Save</button>
                                      </div>
                                  </ul>
                                  <button type="button" className="btn btn-outline-dark btn-sm btn-sm-card" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                      <i className="bi bi-building"></i> Venue Type
                                  </button>
                                  <div className="dropdown-menu  " aria-labelledby="dropdownMenuButton1">

                                      <div className="mb-3 p-3">
                                          <label for="exampleFormControlInput1" className="form-label">Venue Type</label>
                                          <div className="row">
                                              <div className="col-md-4">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Art Gallery


                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Hall

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Conference Center

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Co-working

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          General Event Space
                                                      </label>
                                                  </div>
                                              </div>
                                              <div className="col-md-4">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Golf Course


                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Hotel

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Loft

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">

                                                          Museum


                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Nightclub
                                                      </label>
                                                  </div>
                                              </div>
                                              <div className="col-md-4">
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Other

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Outdoor

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Restaurant &amp; Bar

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Studio

                                                      </label>
                                                  </div>
                                                  <div className="form-check">
                                                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                      <label className="form-check-label" for="flexCheckDefault">
                                                          Theatre
                                                      </label>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="d-flex justify-content-between">
                                          <button type="button" className="btn-3 btn ms-3">Cancel</button>
                                          <button type="button" className="btn-2 btn me-3">Save</button>
                                      </div>
                                  </div>

                                  <button type="button" className="btn btn-outline-dark btn-sm btn-sm-card" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-person"></i> Capacity
                                  </button>
                                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                      <div className="row">
                                          <div className="col-md-3">
                                              <div className="p-3">
                                                  <label for="text" className="form-label">Min:</label>
                                                  <input type="number" className="form-control w-75 mb-2" id="exampleFormControlInput1"/>
                                              </div>
                                          </div>
                                          <div className="col-md-3">
                                              <div className="p-3">
                                                  <label for="text" className="form-label">Max:</label>
                                                  <input type="number" className="form-control w-75 mb-2" id="exampleFormControlInput1"/>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="p-3">
                                          <select className="form-select form-control w-75 mb-2" aria-label="Default select example">
                                              <option selected="">Cocktail</option>
                                              <option value="1">One</option>
                                              <option value="2">Two</option>
                                              <option value="3">Three</option>
                                          </select>
                                      </div>
                                      <div className="d-flex justify-content-between">
                                          <button type="button" className="btn-3 btn ms-3">Cancel</button>
                                          <button type="button" className="btn-2 btn me-3">Save</button>
                                      </div>
                                  </div>
                                  <button type="button" className="btn btn-outline-dark btn-sm btn-sm-card">More</button>
                                  <button type="button" className="btn btn-outline-dark btn-sm btn-sm-card"><i className="bi bi-search"></i></button>
                              </div>

                              <div className="row ">

                                  <div className="col-md-6">
                                      <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
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
                                                      <div className=""><span><img src="assets/img/guest.svg"alt="default" /></span><span className="ms-2 gust">500
                                                              Guests</span>
                                                      </div>
                                                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                          adipiscing </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="mb-4 aos-init" data-aos="fade-up" data-aos-delay="200">
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
                                                      <div className=""><span><img src="assets/img/guest.svg"alt="default" /></span><span className="gust ms-2">500
                                                              Guests</span>
                                                      </div>
                                                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                          adipiscing </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
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
                                                      <div className=""><span><img src="assets/img/guest.svg"alt="default" /></span><span className="gust ms-2">500
                                                              Guests</span>
                                                      </div>
                                                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                          adipiscing </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="mb-4 aos-init" data-aos="fade-up" data-aos-delay="100">
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
                                                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur
                                                          adipiscing </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <nav aria-label="Page navigation example">
                                      <ul className="pagination justify-content-center">
                                          <li className="page-item">
                                              <a className="page-link" href="#" aria-label="Previous">
                                                  <span aria-hidden="true">«</span>
                                              </a>
                                          </li>
                                          <li className="page-item"><a className="page-link " href="#">1</a></li>
                                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                                          <li className="page-item">
                                              <a className="page-link" href="#" aria-label="Next">
                                                  <span aria-hidden="true">»</span>
                                              </a>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                          </div>
                      </div>

                  </div>
                  <div className="col-md-6 ">
                      <div className="card card-bdy">
                          <div className="card-body">
                              <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2195094.8650238!2d-101.52200723495335!3d38.54743480517045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x877333200b74a743%3A0x95c3e468bd1c2adc!2s31759%20County%20Rd%20W%2C%20Stratton%2C%20CO%2080836%2C%20USA!3m2!1d39.3170599!2d-102.57542989999999!5e0!3m2!1sen!2s!4v1640332492625!5m2!1sen!2s" width="913" height="750" allowfullscreen="" loading="lazy" className="fixed"></iframe>
                          </div>
                      </div>

                  </div>

              </div>
          </div>

      </div>
      </section>
  </div>
);

export default CategoryServiceDetails;
