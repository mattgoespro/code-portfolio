import React from 'react';
import './Page.scss';

interface PageProps {
  title?: string;
  subtitle?: string;
  component: any;
}

export default class Page extends React.Component<PageProps> {
  constructor(public props: PageProps) {
    super(props);
  }

  get title() {
    return this.props.title ? <h1 className="content-title">{this.props.title}</h1> : null;
  }

  get subtitle() {
    return this.props.subtitle ? <h2 className="content-subtitle">{this.props.subtitle}</h2> : null;
  }

  render() {
    return (
      <div className="content">
        {this.title}
        {this.subtitle}
        {this.props.component}
      </div>
    );
  }
}
