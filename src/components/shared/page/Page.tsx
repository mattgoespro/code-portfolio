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
      {props.title && <h1 className="content-title">{props.title}</h1>}
      {props.subtitle && <h2 className="content-subtitle">{props.subtitle}</h2>}
      {props.component}
    </div>
  );
}
