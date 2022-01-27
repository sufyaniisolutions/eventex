import React from 'react';

import './testimonials-section.styles.scss';

const TestimonialsSection = () => (

    <div>
       {/* Testimonials Section   */}
  
      <section id="testimonial" className="testimonial mt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-title text-center">
            <h4 className="">Testimonials</h4>
            <h3 className="">These reviews say it better.</h3>

            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                 
                  <div className="testimonial-slider">
                   
                    <div className="item text-center">
                      <i className="tf-ion-chatbubbles"></i>
                      
                      <div className="client-details">
                        <p className="text-lowercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nulla,
                          soluta dolorum. Eos
                          earum, magni asperiores, unde corporis labore, enim, voluptatum officiis voluptates alias
                          natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, officia. Lorem ipsum
                          dolor sit amet, consectetur adipisicing elit. Quod, quia?</p>
                      </div>
                     
                      <div className="client-thumb">
                        <img src="assets/img/testi-1.png" className="img-fluid"  alt='default' />
                      </div>
                      <div className="client-meta">
                        <h5 className="pt-3">William Martin</h5>
                        <span>CEO , Company Name</span>
                      </div>
                     
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>

 
);

export default TestimonialsSection;