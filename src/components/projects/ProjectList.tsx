import { Collapse } from '@mui/material';
import React from 'react';
import GithubProject from './github-project/GithubProject';
import './ProjectList.scss';

export default class ProjectList extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='content'>
                <h1 className='content-title'>Personal Projects</h1>
                <Collapse component="h1">Hello</Collapse>
                <GithubProject></GithubProject>
            </div>
        )
    }
}