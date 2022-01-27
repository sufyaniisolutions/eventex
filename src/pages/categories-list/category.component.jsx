import React from "react";

import CategoryBox from "../../components/category-box/category-box.component";


const classes = {
  rowClass: 'row pt-4 gy-2',
  colClass: 'col-md-4 aos-init aos-animate'
};

const Category = () => (
      <div>
        <section className="service">
          <div className="container pt-5">
            <div className="text-center">
              <h4>Our services</h4>
              <h3>We provide the best service for your event</h3>
            </div>
           
            <CategoryBox  newClasses= {classes} />
            
          </div>
        </section>
      </div>
    );

export default Category;
