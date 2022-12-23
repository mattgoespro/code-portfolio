import { hideLoadingOverlay } from '@redux/reducers/loading-overlay-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import NavHeaderLogo from '@icons/nav-header.svg';
import LinkedInLogo from '@icons/linkedin.svg';
import GitHubLogo from '@icons/github.svg';
import styles from './PageNavigator.module.scss';

interface PageNavigatorProps {
  landingPage: JSX.Element;
}

export function PageNavigator(props: PageNavigatorProps) {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!location.pathname.startsWith('/projects')) {
      dispatch(hideLoadingOverlay());
    }
  }, [location]);

  return (
    <>
      <div className={styles['side-nav']}>
        <div className={styles['header-logo']}>
          <NavHeaderLogo />
        </div>
        <ul className={styles['page-links']}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className={styles['page-link']} to="/projects/list">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles['page-link']} to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className={styles.divider}></div>
        <ul className={styles.socials}>
          <li>
            <a href="https://www.linkedin.com/in/matt-young-691b48189/" target="tab">
              <LinkedInLogo social-icon="true" />
            </a>
          </li>
          <li>
            <a href="https://github.com/mattgoespro" target="tab">
              <GitHubLogo social-icon="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles['page-content']}>
        {location.pathname === '/' && props.landingPage}
        <Outlet />
      </div>
    </>
  );
}
