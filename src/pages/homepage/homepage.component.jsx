import React from 'react';

// import Directory from '../../components/directory/directory.component';
import HeroSection from './hero-section/hero-section.component';
import VendorServices from './vendor-services/vendor-services.component';
import Facilities from './facilities-section/facilities-section.component';
import HowItWorks from './how-It-works/how-It-works.component';
import EventCategories from './category/event-categories.component';
import TestimonialsSection from './testimonials-section/testimonials-section.component';
import GetStartedSection from './get-started-section/get-started-section.component';

import './homepage.styles.scss';

const HomePage = () => (
    /* <div className='homepage'>
    <Directory />
    </div> 
    */

    <div>
    
      <HeroSection />
      <VendorServices />
      <Facilities />
      <HowItWorks />
      <EventCategories />
      <TestimonialsSection />
      <GetStartedSection />
    </div>

 
);

export default HomePage;