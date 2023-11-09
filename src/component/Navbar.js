import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Saas Tech Pvt. Ltd.
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink className="nav-link  dropdown-toggle" to="/services">
                      {/* <NavLink className="nav-link  dropdown-toggle" to="/services" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                        Services
                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><NavLink className="dropdown-item" to="services/todo">Todo List</NavLink></li>
                          <li><NavLink className="dropdown-item" to="services/todoedit">Todo List Edit</NavLink></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><NavLink className="dropdown-item" to="services">Services</NavLink></li>
                        </ul> */}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  <div>Login</div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
