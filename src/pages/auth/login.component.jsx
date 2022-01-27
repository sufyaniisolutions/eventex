import React from 'react';


const Login = () => (

    <div>
     {/* login   */}
     <signin className="signin vh-100">
      <div className="container-fluid">
        <div className="row">

          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img src="assets/img/left.jpg" alt="Login image" className="w-100 vh-100 login-img"
               alt='default' />
          </div>
          <div className="col-sm-6 d-flex justify-content-center">


            <div className="d-flex align-items-center h-custom-2 px-0 ms-xl-0 mt-0 pt-0 pt-xl-0">


              <form className="pt-0">
                <img src="assets/img/logo-2.svg" alt='default' />

                <h3 className="mb-3 pb-3 pt-5">Login</h3>

                <div className=" form">
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Username</label>
                    <input type="name" className="form-control" id="exampleInputName" />
                  </div>
                </div>

                <div className="form">
                  <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputName" />
                    <div className="form-check pt-2">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label  d-flex justify-content-between" for="flexCheckDefault">
                        Remember Me
                        <p className="d-flex justify-content-end pt-lg-1"><a href="#" className="text-muted">Forgot
                            password?</a></p>
                      </label>

                    </div>

                  </div>
                </div>


                <div className="d-flex justify-content-start">
                  <a href="#" className="btn btn-main mt-4 p-3">Login</a>
                </div>
                <p className="pt-3">No account yet? Register for a free account, <a href="#!" className="link-danger">Click
                    here</a>
                </p>

              </form>

            </div>


          </div>
        </div>
      </div>
      </signin>
    </div>

 
);

export default Login;