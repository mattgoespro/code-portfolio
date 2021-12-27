import React from 'react'
import { Link } from 'react-router-dom';
import './PageNotFound.scss';

export const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <div className='image'>
                <img src="assets/media/images/FeelsBadMan-404.png"></img>
            </div>
            <div className='msg-page-not-found'>
                <h2>
                    Pepe is sad that he couldn't find the page you're looking for.
                </h2>
                <h2>
                    Return <Link className='link' to={"/home"}>Home</Link> to make him feel better.
                </h2>
            </div>
        </div>
    )
}
