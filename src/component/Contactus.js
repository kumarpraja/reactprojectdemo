import React, { useState } from "react";

const Contactus = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]:value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname},. My Mobile Number is ${data.phone} and email is ${data.email}, hHere is what I want to say ${data.msg}.`)
  };
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact-div mb-5">
        <div className="row">
          <div className="com-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Mobile No."
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Messages
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-outline-primary">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
