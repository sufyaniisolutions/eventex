import React from 'react';

import './hero-section.styles.scss';

const HeroSection = () => (

    <div>
     {/* Hero Section  */}
     <section id='hero' className='d-flex align-items-center justify-content-center'>
        <div className='container' data-aos='fade-up'>

          <div className='row justify-content-center' data-aos='fade-up' data-aos-delay='150'>
            <div className='col-xl-6 col-lg-8'>
              <h2>Enjoy your celeberations!</h2>
              <h1 className='pt-3 mb-3'>Find Event Suppliers And Venues</h1>
            </div>
          </div>
          <div className='s002'>
            <form>
              <div className='inner-form'>
                <div className='input-field first-wrap me-1'>
                  <select className='form-control search-slt' id='exampleFormControlSelect1'>
                    <option>Location</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
                <div className='input-field second-wrap me-1'>
                  <select className='form-select form-control search-slt' id='exampleFormControlSelect1'>
                    <option>Event Type</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
                <div className='input-field third-wrap me-1'>
                  <select className='form-select form-control search-slt' id='exampleFormControlSelect1'>
                    <option>Services</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
                <div className='input-field forth-wrap me-1'>
                  <select className='form-select form-control search-slt' id='exampleFormControlSelect1'>
                    <option>Date & Time</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                    <option>Example one</option>
                  </select>
                </div>
                <div className='input-field fifth-wrap'>
                  <button className='btn-search' type='button'>Search</button>
                </div>
              </div>
            </form>
          </div>


        </div>
      </section>
    </div>

 
);

export default HeroSection;