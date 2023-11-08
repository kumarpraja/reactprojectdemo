import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="header-wrap">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-md-1">
                  <h1>
                    {props.name}
                    <strong className="brand-name">Sass Tech Pvt. Ltd.</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2 header-img">
                  <img
                    src={props.imgsrc}
                    width="400"
                    className="img-fluid animated"
                    alt="Home Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;