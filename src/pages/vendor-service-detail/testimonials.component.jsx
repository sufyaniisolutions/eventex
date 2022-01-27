import React from "react";

class Testimonials extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="row">
      <div className="col-md-12">
        <h3 className="pt-5">4.5 60 Reviews</h3>
       
        <div className="testimonials">
          <div className="card">
            <div className="content">
              <div className="row">
                <div className="col-md-4">
                  <div className="image  ">
                    <img
                      src="assets/img/testimonials/testi-sm-1.png"
                      alt="default"
                    />
                  </div>
                </div>
                <div className="col-md-8 pt-3">
                  <div className="details d-flex justify-content-start">
                    <h5>
                      Baron DaParre
                      <br />
                      <span className="d-flex justify-content-start">
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="row">
                <div className="col-md-4">
                  <div className="image  ">
                    <img
                      src="assets/img/testimonials/testi-sm-2.png"
                      alt="default"
                    />
                  </div>
                </div>
                <div className="col-md-8 pt-3">
                  <div className="details d-flex justify-content-start">
                    <h5>
                      Baron DaParre
                      <br />
                      <span className="d-flex justify-content-start">
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="row">
                <div className="col-md-4">
                  <div className="image  ">
                    <img
                      src="assets/img/testimonials/testi-sm-3.png"
                      alt="default"
                    />
                  </div>
                </div>
                <div className="col-md-8 pt-3">
                  <div className="details d-flex justify-content-start">
                    <h5>
                      Baron DaParre
                      <br />
                      <span className="d-flex justify-content-start">
                        <div className="">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star"></span>
                          <span className="fa fa-star"></span>
                        </div>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className=" pagination d-flex justify-content-center">
          <a className="me-3" href="#">
            ❮
          </a>
          <a href="#">❯</a>
        </div>
      </div>
    </div>
    );
  }
}
export default Testimonials;
