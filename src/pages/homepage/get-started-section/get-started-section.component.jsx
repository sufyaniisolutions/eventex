import React from 'react';

import './get-started-section.styles.scss';

const GetStartedSection = () => (

    <div>
       {/* Start Get Started Section  */}
    <section className="get-started section" id="get-started">
      <div className="container" data-aos="fade-up">
        <div className="text-center">
          <h4>Ready to get started?</h4>
          <h3>Don't hesitate to use our services</h3>
        </div>
        <div className="d-flex justify-content-center flex-important flex-direction-row flex-wrap pt-4">
          <div className="col-md-6">
            <div className="me-3" data-aos="fade-right">
              <div className="bg-3 text-center p-5">
                <img src="assets/img/plan-event.svg"  alt='default' />
                <h5>Plan an Event</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus consequat tellus at
                  hendrerit.</p>
                <a href="#" className="btn btn-main mt-2 p-3">Sign Up</a>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <div className=" ms-3" data-aos="fade-left">
              <div className="bg-3 text-center p-5">
                <img src="assets/img/become-supplier.svg"  alt='default' />
                <h5>Become a Supplier</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus consequat tellus at
                  hendrerit.</p>
                <a href="#" className="btn btn-main mt-2 p-3">Become a Supplier</a>
              </div>
            </div>
          </div>
        </div> 
      </div> 
    </section> 
    </div>

 
);

export default GetStartedSection;