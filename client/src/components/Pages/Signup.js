import React, { useEffect, useState } from "react";
import {useAuthContext} from "../../context/AuthContext"

function Signup() {
  const auth= useAuthContext();
  const [selectedOption, setSelectedOption] = useState("Customer") ;
  function onValueChange(event){
    setSelectedOption(event.target.value)
}
function formSubmit(event) {
  event.preventDefault();
  
  // console.log(auth)
  
}

  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasSignup"
        aria-labelledby="offcanvasSignupLabel"
      >
        <div className="offcanvas-header">
          {/* <h5 className="offcanvas-title" id="offcanvasSignupLabel">
          Signup
      </h5> */}

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <form>
            <h3>SignUp</h3>
            <div className="mb-3">
              <input
                type="username"
                className="form-control"
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="Email1"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="PasswordSignup"
                placeholder="Enter Password"
              />
            </div>
            <div className="mb-3 d-flex">
              <label>
                <input
                  type="radio"
                  value="Customer"
                  checked={selectedOption === "Customer"}
                  onChange={onValueChange}
                  
                />
                Customer
              </label>
              <label>
                <input
                  type="radio"
                  value="Owner"
                  // Checking this radio button if the selected option is "Male"
                  checked={selectedOption === "Owner"}
                  onChange={onValueChange}
                />
               {"  "} Owner
              </label>
              <br />
            </div>

            <button type="submit" onClick={formSubmit} className="btn btn-danger w-100">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
