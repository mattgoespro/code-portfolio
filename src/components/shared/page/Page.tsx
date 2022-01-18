import React from 'react';
import './Page.scss';

interface PageProps {
  title?: string;
  subtitle?: string | JSX.Element;
  component: any;
}

export default function Page(props: PageProps) {
  return (
    <div className="content">
      {props.title && (
        <h1 key={props.title} className="content-title">
          {props.title}
        </h1>
      )}
      {props.subtitle && (
        <h2 key={props.subtitle as string} className="content-subtitle">
          {props.subtitle}
        </h2>
      )}
      <div className="divider"></div>
      {<div className="page-content">{props.component}</div>}
    </div>
  );
}
