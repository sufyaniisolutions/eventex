import React from 'react';

const Contactus = () => (

    <div>
     
     <section className="contact-us">
    <div className="container">
      <div className="row">

     
        <div className="col-12">
          <div className="text-center">
            <h2>Get In Touch</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> facilis eveniet
              maiores ab maxime nam
              ut numquam molestiae quaerat incidunt?</p>
          </div>
        </div>
   
        <div className="contact-details col-md-6 pt-5">
          <h3>Contact Details</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis
            ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam
            labore adipisci.</p>
          <ul className="contact-short-info">
            <li>
              <i className="bi bi-geo-alt-fill"></i>
              <span>250 rue de la Montagne Montreal, QC H7D 7K9</span>
            </li>
            <li>
              <i className="bi bi-telephone-fill"></i>
              <span>0021-123-456-78</span>
            </li>
            <li>
              <i className="bi bi-envelope-fill"></i>
              <span>info@eventex.com</span>
            </li>
          </ul>
        
          <div className="social-icon">
            <div className="social-links mt-3">
              <a href="#"><img src="assets/img/fb.svg" alt="default" /></a>
              <a href="#"><img src="assets/img/twitter.svg" alt="default" /></a>
              <a href="#"><img src="assets/img/insta.svg" alt="default" /></a>
              <a href="#"><img src="assets/img/ytube.svg" alt="default" /></a>
              <a href="#"><img src="assets/img/linkin.svg" alt="default" /></a>
            </div>
          </div>
        
        </div>
      
        <div className="contact-form col-md-6 pt-5">
          <div className=" form">
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">Your Name</label>
              <input type="name" className="form-control" id="exampleInputName" />
            </div>
          </div>
          <div className=" form">
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">Email Address</label>
              <input type="name" className="form-control" id="exampleInputName" />
            </div>
          </div>
          <div className=" form">
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">Subject</label>
              <input type="name" className="form-control" id="exampleInputName" />
            </div>
          </div>
          <div className=" form">
            <div className="mb-3">
              <label for="exampleInputName" className="form-label">Message</label>
              <input type="name" className="form-control" id="exampleInputName" />
            </div>
          </div>
          <div className="d-flex justify-content-start">
            <a href="#" className="btn btn-main mt-4 p-3">Submit</a>
          </div>
        </div>
       

      </div>
    </div>

  </section>
    </div>

 
);

export default Contactus;