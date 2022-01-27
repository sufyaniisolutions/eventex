import React from 'react';


const Signup = () => (

    <div>
     {/* login   */}
     <signin className="signin vh-100">
     
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src="assets/img/left-2.jpg" alt="Login image" className="w-100 vh-100 login-img" />
          </div>
          <div className="col-sm-6 d-flex justify-content-center my-5">


            <div className="d-flex align-items-center h-custom-2 px-0 ms-xl-0 mt-0 pt-0 pt-xl-0">


              <form className="pt-0">
              <h3 className="mb-3 pb-3 pt-5">Register as a User
              </h3>

                <div className=" form">
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Name</label>
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
                    <label for="exampleInputName" className="form-label">Phone Number</label>
                    <input type="name" className="form-control" id="exampleInputName" />
                  </div>
                </div>
                <div className=" form">
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Location</label>
                    <input type="name" className="form-control" id="exampleInputName" />
                  </div>
                </div>
                <div className=" form">
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputName" />
                  </div>
                </div>
                <div className=" form">
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputName" />
                  </div>
                </div>

                <div className="form-check pt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label  d-flex justify-content-between" for="flexCheckDefault">
                    I agree terms and conditions
                  </label>
                </div>
                <div className="form-check pt-2">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label  d-flex justify-content-between" for="flexCheckDefault">
                    Yes, I want to get news by subscribing for free (Newsletter)
                  </label>
                </div>


                <div className="d-flex justify-content-start">
                  <a href="#" className="btn btn-main mt-4 p-3">Register</a>
                </div>
                <p className="pt-3">If you already Register <a href="#!" className="link-danger">Click
                    here</a> to login
                </p>

              </form>

            </div>


          </div>
        </div>
      </div>
 
      </signin>
    </div>

 
);

export default Signup;