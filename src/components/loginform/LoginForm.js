import React from "react";

import "./loginform.css";
import gsap from "gsap";
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    this.overlay = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount() {
    let tl = gsap.timeline();
    tl.from(this.overlay, {
      opacity: 0,
      duration: 0.3,
      transformOrigin: "center center",
    });
    tl.from(this.myElement, {
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      ease: "power4.out",
    });
  }

  render() {
    return (
      <div className="overlay" ref={(el2) => (this.overlay = el2)}>
        <div className="row">
          <div className="col-xl-12 col-md-12 col-md-12">
            <div className="cardLogin" ref={(el) => (this.myElement = el)}>
              <div className="card-body wow-bg" id="formBg">
                <h3 className="colorboard text-center">Login</h3>

                <p className="text-muted text-center">
                  Sign In to your account
                </p>

                <div className="input-group mb-3">
                  {" "}
                  <input
                    type="text"
                    className="form-control textbox-dg"
                    placeholder="Username"
                  />{" "}
                </div>
                <div className="input-group mb-4">
                  <input
                    type="password"
                    className="form-control textbox-dg"
                    placeholder="Password"
                  />
                </div>

                <div className="row">
                  <div className="col-12">
                    {" "}
                    <button
                      type="button"
                      className="btn btn-primary btn-block logn-btn"
                    >
                      Login
                    </button>{" "}
                  </div>
                  <div className="col-12">
                    {" "}
                    <a
                      href="forgot-password.html"
                      className="btn btn-link box-shadow-0 px-0"
                    >
                      Forgot password?
                    </a>{" "}
                  </div>
                </div>

                <div className="mt-6 btn-list">
                  <button
                    type="button"
                    className="socila-btn btn btn-icon btn-facebook fb-color"
                  >
                    <i className="fab fa-facebook-f faa-ring animated"></i>
                  </button>{" "}
                  <button
                    type="button"
                    className="socila-btn btn btn-icon btn-google incolor"
                  >
                    <i className="fab fa-linkedin-in faa-flash animated"></i>
                  </button>{" "}
                  <button
                    type="button"
                    className="socila-btn btn btn-icon btn-twitter tweetcolor"
                  >
                    <i className="fab fa-twitter faa-shake animated"></i>
                  </button>{" "}
                  <button
                    type="button"
                    className="socila-btn btn btn-icon btn-dribbble driblecolor"
                  >
                    <i className="fab fa-dribbble faa-pulse animated"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
