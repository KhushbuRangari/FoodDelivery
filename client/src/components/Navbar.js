import React from "react";
import { Link, Navigate } from "react-router-dom";
import Cart from "./Pages/Cart";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
  const auth = useAuthContext();

  // const userName1 =auth.localUser.user?."mm"

  // console.log(userName1.username,"navbar names");
  function handleLogout(e) {
    auth.logout(false);
    auth.setIsLogged(false)
  }
  return (
    <>
      <nav className="navbar shadow navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            {" "}
            <img
              src="/logoo1.png"
              height={56}
              width={190}
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ width: "70%" }}
            />
            <button className="btn " type="submit">
              Search
            </button>

            <ul className="navbar-nav mb-2 mb-lg-0">

              
            {auth.isLogged ? (
              <>
                <li className="nav-item">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <i className="fa fa-cart-arrow-down" /> Cart
                  </button>
                </li>
                <li className="nav-item">
                  <Link to={"/"} className="nav-link" onClick={handleLogout}>
                    <i className="fa fa-user" /> Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasLogin"
                    aria-controls="offcanvasLogin"
                  >
                    <i className="fa fa-user" /> Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasSignup"
                    aria-controls="offcanvasSignup"
                  >
                    <i className="fa fa-user" /> Signup
                  </button>
                </li>
              </>
            )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
