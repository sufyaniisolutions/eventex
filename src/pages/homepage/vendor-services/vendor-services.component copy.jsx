import React from "react";

import ServiceNav from "../../../components/service-navs/service-nav.component";
import Servicebox from "../../../components/service-box/service-box.component";

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
    };
  }

  render() {
    return (
      <div>
        <section id="discover" className="discover mt-0">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center">
              <h4 className="">Discover suppliers</h4>
              <h3 className="">
                We’ll make your next celebration very special!
              </h3>
              <div className="d-flex justify-content-center">
                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent">
                  {this.state.services.map(({ id, ...otherSectionProps }) => (
                    <ServiceNav key={id} {...otherSectionProps} />
                  ))}
                </ul>
              </div>
            </div>
            <div className="container" data-aos="fade-up">
              <div className="row gy-3">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                  <Servicebox key={id} {...otherSectionProps} />
                ))}

              </div>
              <div className="button d-flex flex-column align-items-center justify-content-center pt-4">
                <button type="button" className="btn btn-outline-secondary">
                  View More
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
