import React from 'react';



const Facilities = () => (

    <div>
       {/* Start Services Section   */}
    <section className='services section' id='services'>
      <div className='container' data-aos='fade-up'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='row d-flex justify-content-between' data-aos='fade-right'>
              <div className='col-md-3'>
                <div className='d-flex justify-contnet-center flex-column'>
                  <img src='assets/img/venue.svg' className='m-2' alt='default' />
                  <span className='pt-2 d-flex justify-content-center'>
                    <h6>Venue Selection</h6>
                  </span>
                </div>
              </div>
              <div className='col-md-3 ms-0'>
                <div className='d-flex justify-contnet-center flex-column'>
                  <img src='assets/img/poto.svg' className='m-2' alt='default' />
                  <span className='pt-2 d-flex justify-content-center'>
                    <h6>Photo and Video</h6>
                  </span>
                </div>
              </div>
              <div className='col-md-3 ms-0'>
                <div className='d-flex justify-contnet-center flex-column'>
                  <img src='assets/img/invitation.svg' className='m-2' alt='default' />
                  <span className='pt-2 d-flex justify-content-center'>
                    <h6>Invitation Cards</h6>
                  </span>
                </div>
              </div>
            </div>
            <div className='row d-flex justify-content-between pt-5'>
              <div className='col-md-3'>
                <div className='d-flex justify-contnet-center flex-column'>
                  <img src='assets/img/entertainment.svg' className='m-2' alt='default' />
                  <span className='pt-2 d-flex justify-content-center'>
                    <h6>Entertainment</h6>
                  </span>
                </div>
              </div>
              <div className='col-md-3 ms-0'>
                <div className='d-flex justify-contnet-center flex-column'>
                  <img src='assets/img/Decoration.svg' className='m-2' alt='default' />
                  <span className='pt-2 d-flex justify-content-center'>
                    <h6>Decoration</h6>
                  </span>
                </div>
              </div>
              <div className='col-md-3 ms-0'>
                <div className='d-flex justify-contnet-center flex-column'>
                  <img src='assets/img/Transport.svg' className='m-2' alt='default' />
                  <span className='pt-2 d-flex justify-content-center'>
                    <h6>Transport</h6>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6' data-aos='fade-left'>
            <h4>Our services</h4>
            <h3>We provide the best
              service for your event
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <a href='#' className='btn btn-main mt-4 p-3'>More Services</a>
          </div>
        </div> 
      </div>
    </section>
    </div>

 
);

export default Facilities;