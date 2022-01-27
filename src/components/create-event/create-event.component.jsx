import React from 'react';

class CreateEvent extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <section className="create-event">
      <div className="container pt-5">
        <div className="col-md-12">
          <div className="white-bg border p-2">
            <div className="event-content d-flex justify-content-between">
              <div className="col-md-12 p-5">
                <h4>Create new event</h4>
  
                <div className="row">
                  <div className="col-md-4">
                    <div className="form">
                      <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Event Name</label>
                        <input type="name" className="form-control" id="exampleInputName" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form">
                      <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Date</label>
                        <input type="name" className="form-control" id="exampleInputName" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form">
                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Event type</label>
                        <select className="form-select" aria-label="Default select example">
                          <option selected="">Marriage</option>
                          <option value="1">Birthday</option>
                          <option value="2">Engagment</option>
                          <option value="3">Anniversary</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-md-4">
                    <div className="form">
                      <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Number of guests</label>
                        <input type="name" className="form-control" id="exampleInputName" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form">
                      <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Region</label>
                        <input type="name" className="form-control" id="exampleInputName" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form">
                      <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Event Budget (USD)</label>
                        <input type="name" className="form-control" id="exampleInputName" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form">
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Message</label>
                    <input type="name" className="form-control" id="exampleInputName" />
                  </div>
                </div>
  
                <div className=" d-flex justify-content-start">
                  <a href="#" className="btn btn-main mt-4 p-3">Create Event</a>
                </div>
              </div>
            </div>
          </div>
  
        </div>
  
      </div>
    </section>
    );
  }
}

export default CreateEvent;