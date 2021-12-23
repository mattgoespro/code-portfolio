import React from "react";
import "./Home.scss";

export class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="introduction">
        <h1 className="intro-title">Hello World!</h1>
        <h2 className="intro-sub">
          Allow me to introduce myself
        </h2>
        <p className="intro-paragraph">
          I&apos;m a full-stack Software Engineer with professional
          experience working with RESTful APIs and backend microservices, with a focus on scalable system design.
        </p>
        <p className="intro-paragraph">
          ... info
        </p>
        <p className="intro-paragraph">
          <i>For more detailed information about my technical skills and career, see my <a className="about-ref" href="">About</a> page.</i>
        </p>
      </div>
    );
  }
}
