import React, { Component } from "react";
import Navbar from "./navbar";

class WelcomeJumbotron extends Component {
  render() {
    return (
      <div id="welcome-jumbotron" className="jumbotron-div">
        <Navbar visible={this.props.visible}></Navbar>
        <div className="container">
          <h1 id="title">HELLO! I'M A FULL STACK WEBSITE DEVELOPER </h1>
          <h3 id="subtitle">
            I love to implement your design, come and see what i have done on
            websites.
          </h3>
          <div id="wrap-btn">
            <button className="explore">
              <p>Let's find out</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  id="arrow"
                  d="M16 7.328v-3.328l8 8-8 8v-3.328l-16-4.672z"
                />
              </svg>
            </button>
          </div>
          <div id="image-illustration">
            <img
              src={require("../../img/webdeveloper.png")}
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WelcomeJumbotron;