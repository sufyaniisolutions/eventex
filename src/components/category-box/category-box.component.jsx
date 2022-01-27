import React from "react";

import {Link} from 'react-router-dom';
class CategoryBox extends React.Component {
  constructor() {
    super();
    this.state = { 
      catgories: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/EventManagement/public/api/categories?per_page=25')
      .then(response => response.json())
      .then(user =>  this.setState({catgories:user.data}));
      
  }

  render() {
    let props = this.props;
    console.log(props.newClasses.rowClass);
    return (
      
           <div className={`${props.newClasses.rowClass}`}>
             
            {this.state.catgories.map(({ id, name,imagePath, image }) => (
              <div key={id} className={`${props.newClasses.colClass}`} data-aos="fade-up" data-aos-delay="100">
                <div className="product p-3">
                <div className={`${name} card w-100`}>
                    <div className="card w-100">
                      <Link to="/category-services">
                        <img src={`${imagePath}${image}`} className="card-img-top" alt="default" />

                        <div className="card-body text-center">
                          <h5 className="card-title">{name.toUpperCase()}</h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
              ))} 
              </div>
           
    );
  }
}


export default CategoryBox;
