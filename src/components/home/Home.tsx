import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="content">
        <h1 className="content-title">Hello World!</h1>
        <h2 className="intro-sub">Allow me to introduce myself.</h2>
        <p className="intro-paragraph">
          My name is Matt but I go by the alias <i className="alias">hoppingmode</i> (cool right?).
        </p>
        <p className="intro-paragraph">
          I&apos;m a full-stack Software Engineer with professional experience working with RESTful
          APIs and backend microservices, with a focus on scalable system design.
        </p>
        <p className="intro-paragraph">
          <i>
            For more detailed information about my technical skills and career, see my{' '}
            <Link className="link" to="/about">
              About
            </Link>{' '}
            page.
          </i>
        </p>
      </div>
    );
  }
}
