import React from 'react';
import GithubProject from './github-project/GithubProject';
import './ProjectList.scss';

export default function ProjectList() {
  return (
    <div className="content">
      <h1 className="content-title">Personal Projects</h1>
      <div className="project-list">
        <GithubProject />
      </div>
    </div>
  );
}
