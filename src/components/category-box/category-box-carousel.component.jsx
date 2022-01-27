import React from "react";

import { Link } from "react-router-dom";
class CategoryBoxCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      catgories: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:8080/EventManagement/public/api/categories?per_page=25"
    )
      .then((response) => response.json())
      .then((user) => this.setState({ catgories: user.data }));
  }
  render() {
    let props = this.props;
    console.log(props.newClasses.rowClass);
    return (
      <div>
        <div className="carousel-item active">
          <div className={`${props.newClasses.rowClass}`}>
            {this.state.catgories.slice(0, 4).map((currElement, index) => (
              <div
                key={currElement.id}
                className={`${props.newClasses.colClass} ssa`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* {`${this.setState({ count: this.state.count + index })}`} */}
                <div className="product p-3">
                  <div className={`${currElement.name} card w-100`}>
                    <div className="card w-100">
                      <Link to="/category-services">
                        <img
                          src={`${currElement.imagePath}${currElement.image}`}
                          className="card-img-top"
                          alt="default"
                        />

                        <div className="card-body text-center">
                          <h5 className="card-title">
                            {currElement.name.toUpperCase()}
                          </h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-item ">
          <div className={`${props.newClasses.rowClass}`}>
            {this.state.catgories.slice(4, 8).map((currElement, index) => (
              <div
                key={currElement.id}
                className={`${props.newClasses.colClass} ssa`}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* {`${this.setState({ count: this.state.count + index })}`} */}
                <div className="product p-3">
                  <div className={`${currElement.name} card w-100`}>
                    <div className="card w-100">
                      <Link to="/category-services">
                        <img
                          src={`${currElement.imagePath}${currElement.image}`}
                          className="card-img-top"
                          alt="default"
                        />

                        <div className="card-body text-center">
                          <h5 className="card-title">
                            {currElement.name.toUpperCase()}
                          </h5>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>
    );
  }
}

export default CategoryBoxCarousel;
