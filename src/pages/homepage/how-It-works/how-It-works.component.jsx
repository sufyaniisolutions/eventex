import React from 'react';

import './how-It-works.styles.scss';

const HowItWorks = () => (

    <div>
           
{/* Start How It Works  */}
    <section className="how-it-works section">
      <div className="container text-center">
        <h4>How it works</h4>
        <h3>It’s simple. You have an event
          to plan and we have the solutions
        </h3>
        <div className="row">
          <div className="col-md-4 text-center flex-column pt-5" data-aos="fade-left">
            <img src="assets/img/how-1.svg" alt='default' />
            <h5 className="pt-3">Find the perfect venue
              for free
            </h5>
          </div>
          <div className="col-md-4 text-center flex-column pt-5" data-aos="fade-up">
            <img src="assets/img/how-2.svg" alt='default' />
            <h5 className="pt-3">Connect with the best
              vendor

            </h5>
          </div>
          <div className="col-md-4 text-center flex-column pt-5" data-aos="fade-right">
            <img src="assets/img/how-3.svg" alt='default' />
            <h5 className="pt-3">Let us help you with the
              event
            </h5>
          </div>
        </div> 
        <a href="#" className="btn btn-main mt-5 p-3">Plan an Event</a>
      </div>
    </section>
    </div>

 
);

export default HowItWorks;