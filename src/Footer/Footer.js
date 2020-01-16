import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <a
          href="https://www.linkedin.com/in/wesleyjacobsdev/"
          className="footerLink"
          target="newtab"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/wjacobs71086"
          className="footerLink"
          target="newtab"
        >
          Github
        </a>
      </section>
    );
  }
}

export default Footer;
