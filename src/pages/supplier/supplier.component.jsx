import React from "react";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
const SupplierSection = () => {
  const [vendorRegistration, setVendorRegistration] = React.useState({
    first_name: "",
    email: "",
    phone: "",
    password: "",
    name: "",
    last_name:""
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setVendorRegistration({ ...vendorRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(vendorRegistration);
    if (vendorRegistration.password != vendorRegistration.confirmPassword) {
      console.log(vendorRegistration.password);
      console.log(vendorRegistration.confirmPassword);
      alert("Password don't match ");
      return;
    }
    let firstName = vendorRegistration.first_name;
    let lastName = vendorRegistration.last_name;
    setVendorRegistration({
      ...vendorRegistration,
      name: firstName + " " + lastName,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:8080/",
        "Access-Control-Allow-Methods":"POST",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vendorRegistration),
    };
    console.log(requestOptions);
    return fetch(
      "http://localhost:8080/EventManagement/public/api/organization/register",
      requestOptions
    ).then((results) => console.log(results));
  };

  return (
    <div>
      <signin className="signin vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="assets/img/left-2.jpg"
                alt="default"
                className="w-100 vh-100 login-img"
              />
            </div>
            <div className="col-sm-6 d-flex justify-content-center my-5">
              <div className="d-flex align-items-center h-custom-2 px-0 ms-xl-0 mt-0 pt-0 pt-xl-0">
                <form className="pt-0" action="" onSubmit={handleSubmit}>
                  <h3 className="mb-6 pb-3 pt-5">Become a Supplier</h3>

                  <div className=" form">
                    <div className="mb-6">
                      <FormInput
                        name="first_name"
                        type="text"
                        className="form-control"
                        value={vendorRegistration.first_name}
                        handleChange={handleChange}
                        label="First Name"
                        required
                      />
                    </div>
                  </div>
                  <div className=" form">
                    <div className="mb-6">
                      <FormInput
                        name="last_name"
                        type="text"
                        className="form-control"
                        value={vendorRegistration.last_name}
                        handleChange={handleChange}
                        label="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className=" form">
                    <div className="mb-6">
                      <FormInput
                        name="email"
                        type="email"
                        className="form-control"
                        handleChange={handleChange}
                        value={vendorRegistration.email}
                        label="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className=" form">
                    <div className="mb-6">
                      <FormInput
                        name="phone"
                        type="tel"
                        className="form-control"
                        handleChange={handleChange}
                        value={vendorRegistration.phone}
                        label="Phone Number"
                        // pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                        required
                      />
                    </div>
                  </div>

                  <div className=" form">
                    <div className="mb-6">
                      <FormInput
                        name="password"
                        type="password"
                        className="form-control"
                        handleChange={handleChange}
                        value={vendorRegistration.password}
                        label="Password"
                        required
                      />
                    </div>
                  </div>
                  <div className=" form">
                    <div className="mb-6">
                      <FormInput
                        name="confirmPassword"
                        type="password"
                        className="form-control"
                        handleChange={handleChange}
                        value={vendorRegistration.confirmPassword}
                        label="Confirm Password"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-check pt-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label  d-flex justify-content-between"
                      for="flexCheckDefault"
                    >
                      I agree terms and conditions
                    </label>
                  </div>

                  <div className="d-flex justify-content-start">
                    <CustomButton
                      className="btn btn-main mt-4 p-3"
                      type="submit"
                    >
                      {" "}
                      Register{" "}
                    </CustomButton>
                  </div>
                  <p className="pt-3">
                    If you already Register{" "}
                    <a href="#!" className="link-danger">
                      Click here
                    </a>{" "}
                    to login
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </signin>
    </div>
  );
};

export default SupplierSection;
