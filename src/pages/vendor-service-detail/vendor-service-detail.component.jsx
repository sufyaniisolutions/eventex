import React from "react";

import CategoryBox from "../../components/category-box/category-box.component";
import Servicebox from "../../components/service-box/service-box.component";
import Testimonials from "./testimonials.component";
import { useLocation } from 'react-router';

import VendorServiceImages from "./vendor-service-images.component";
const classes = {
  rowClass: "row pt-4 gy-2",
  colClass: "col-md-4 aos-init aos-animate",
};

class VendorServiceDetail extends React.Component {
  
  constructor() {
    
    super();
    this.state = {
      sections: [ ],
      serviceFormDetail : []

    };
    
  }

  componentDidMount() {
    fetch(
      "http://localhost:8080/EventManagement/public/api/services?per_page=8"
    )
      .then((response) => response.json())
      .then((result) => this.setState({ sections: result.data }));

      fetch(
        `http://localhost:8080/EventManagement/public/api/services/vendor-service-form/21`
      )
        .then((results) => results.json())
        .then((result) => this.setState({ serviceFormDetail: result.data }));
  }
  render() {
    
    return (
      <section className="detail-page">
        <div className=" container">
          <div className="row ">
            <div className="d-flex justify-content-end">
              <a href="#" className="btn btn-main mt-0 p-3">
                Book Now
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-xs-6">
              <img src="assets/img/logo/image 28.svg" alt="default" />
              <h2>{this.state.serviceFormDetail.address}</h2>
              <span>
                {" "}
                Miami | <span className="fa fa-star checked"> 4.5</span>
              </span>
              <p>
                {" "}
                Venue Type:{" "}
                <label className="fw-bolder"> General event space </label>
              </p>
              <p>
                {" "}
                Capacity: <label className="fw-bolder"> 1,000 Guests </label>
              </p>
              <p>
                {" "}
                Venue style: <label className="fw-bolder"> Upscale </label>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                viverra, erat sit amet accumsan accumsan, mauris neque luctus
                arcu, quis ullamcorper diam dui vel ipsum. Mauris ultricies quam
                quis dui lobortis ullamcorper. Read More
              </p>
            </div>

            <VendorServiceImages {...this.state.serviceFormDetail} />
           
          </div>

          <div className="row amface mt-5">
            <div className="col-sm-6 col-md-6 col-xs-6">
              <h3>Amenities</h3>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-6">
                  <lable>
                    <i className="bi bi-wifi"></i> Wifi
                  </lable>
                  <br />
                  <lable>
                    {" "}
                    <i className="bi bi-shield"></i> Projector{" "}
                  </lable>
                  <br />
                  <lable>
                    <i className="bi bi-brightness-high"></i> Natural light{" "}
                  </lable>
                  <br />
                  <lable>
                    <i className="bi bi-lightbulb"></i> Lighting equipment
                  </lable>
                  <br />
                  <lable>
                    <img src="assets/img/icons/starge.svg" alt="default" />{" "}
                    Stage
                  </lable>
                </div>
                <div className="col-sm-6 col-md-6 col-xs-6">
                  <lable>
                    <img src="assets/img/icons/sofa.svg" alt="default" /> Sofas{" "}
                  </lable>
                  <br />
                  <lable>
                    {" "}
                    <img src="assets/img/icons/chair.svg" alt="default" />{" "}
                    Chairs{" "}
                  </lable>
                  <br />
                  <lable>
                    <img src="assets/img/icons/tabel.svg" alt="default" />{" "}
                    Tables{" "}
                  </lable>
                  <br />
                  <lable>
                    <i className="bi bi-mic"></i> Microphone
                  </lable>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xs-6">
              <h3>Facilities</h3>
              <div className="row">
                <div className="col-sm-6 col-md-6 col-xs-6">
                  <lable>
                    <img src="assets/img/icons/makeup.svg" alt="default" />{" "}
                    Hair/makeup space
                  </lable>
                  <br />
                  <lable>
                    <img src="assets/img/icons/dressing.svg" alt="default" />{" "}
                    Dressing room{" "}
                  </lable>
                  <br />
                  <lable>
                    <img src="assets/img/icons/whellchair.svg" alt="default" />{" "}
                    Wheelchair accessible{" "}
                  </lable>
                </div>
                <div className="col-sm-6 col-md-6 col-xs-6">
                  <lable>
                    <img src="assets/img/icons/loading.svg" alt="default" />{" "}
                    Loading dock
                  </lable>
                  <br />
                  <lable>
                    <img src="assets/img/icons/storage.svg" alt="default" />{" "}
                    Storage space{" "}
                  </lable>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 gy-3">
            <h3>Packages</h3>
            <div className="col-sm-3 col-md-3 col-xs-3">
              <div className="card ">
                <div className="card-header text-white text-center">Package 1</div>
                <div className="card-body card-bodyy ">
                  <p className="card-text text-center">20-50 Guests</p>
                  <p className="card-text text-center">$250 Monday-Thursday</p>
                  <p className="card-text text-center">$325 Firday-Sunday</p>
                  <p className="card-text text-center">4 Hours</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn-2 btn-main mt-0 p-2 me-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-xs-3">
              <div className="card ">
                <div className="card-header text-white text-center">Package 2</div>
                <div className="card-body card-bodyy ">
                  <p className="card-text text-center">50-100 Guests</p>
                  <p className="card-text text-center">$250 Monday-Thursday</p>
                  <p className="card-text text-center">$325 Firday-Sunday</p>
                  <p className="card-text text-center">4 Hours</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn-2 btn-main mt-0 p-2 me-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-xs-3">
              <div className="card ">
                <div className="card-header text-white text-center">Package 3</div>
                <div className="card-body card-bodyy ">
                  <p className="card-text text-center">100-150 Guests</p>
                  <p className="card-text text-center">$250 Monday-Thursday</p>
                  <p className="card-text text-center">$325 Firday-Sunday</p>
                  <p className="card-text text-center">4 Hours</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn-2 btn-main mt-0 p-2 me-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-md-3 col-xs-3">
              <div className="card ">
                <div className="card-header text-white text-center">Package 4</div>
                <div className="card-body card-bodyy ">
                  <p className="card-text text-center">150-200 Guests</p>
                  <p className="card-text text-center">$250 Monday-Thursday</p>
                  <p className="card-text text-center">$325 Firday-Sunday</p>
                  <p className="card-text text-center">4 Hours</p>
                  <div className="d-flex justify-content-center">
                    <a href="#" className="btn-2 btn-main mt-0 p-2 me-2">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 gy-3">
            <h3>Other Services</h3>
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
                  <Servicebox key={id} {...otherSectionProps} />
                ))}

          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-md-12 col-xs-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2195094.8650238!2d-101.52200723495335!3d38.54743480517045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x877333200b74a743%3A0x95c3e468bd1c2adc!2s31759%20County%20Rd%20W%2C%20Stratton%2C%20CO%2080836%2C%20USA!3m2!1d39.3170599!2d-102.57542989999999!5e0!3m2!1sen!2s!4v1640332492625!5m2!1sen!2s"
                width="1120"
                height="450"
                
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-4 col-md-4 col-xs-4">
              <h3>Planned perks </h3>
            </div>
            <div className="col-sm-4 col-md-4 col-xs-4">
              <h5>
                {" "}
                <i className="bi bi-clock "></i> 24h grace period{" "}
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ullamcorper imperdiet eros, a ultrices quam vehicula
                vel. Nulla sollicitudin nisl elementum euismod pellentesque.
                Praesent ullamcorper odio lectus, ac placerat odio varius ac.{" "}
              </p>
            </div>
            <div className="col-sm-4 col-md-4 col-xs-4">
              <h5>
                {" "}
                <i className="bi bi-shield-check"></i> Guaranteed covid safety
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ullamcorper imperdiet eros, a ultrices quam vehicula
                vel. Nulla sollicitudin nisl elementum euismod pellentesque.
                Praesent ullamcorper odio lectus, ac placerat odio varius ac.{" "}
              </p>
            </div>
          </div>
         <Testimonials />
          <div className="row mt-5">
            <h3>Nearby Suppliers and Venues </h3>

            <CategoryBox newClasses={classes}  />
          
          </div>
        </div>
      </section>
    );
  }
}
export default VendorServiceDetail;
