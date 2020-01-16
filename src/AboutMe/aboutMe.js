import React, { Component } from "react";
import icon from "../headIcon_purple.png";

export class AboutMe extends Component {
  render() {
    return (
      <section className="about-me-section" id="aboutMe">
        <img src={icon} alt="icon" className="AboutMeIcon"></img>
        <h4 className="section-title">About Me</h4>
        <p className="about-me-body">
          I am a passionate and collaborative software developer in the LA area.
          Learning new techniques, strategies, and working with great people to
          create exceptional outcomes is what I do.
        </p>
        <p className="about-me-body">
          Having a background in graphic design, and technical support I was
          seeing the power and beauty of software and that was the driving force
          of my developmental career.
        </p>
      </section>
    );
  }
}

export default AboutMe;
