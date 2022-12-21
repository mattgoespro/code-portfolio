import { GitHub, LinkedIn } from '@mui/icons-material';
import { hideLoadingOverlay } from '@redux/reducers/loading-overlay-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SidebarLogo from './sidebar-logo.svg';
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
        <div className={styles['side-nav-logo']}>
          <SidebarLogo />
        </div>
        <ul className={styles['side-nav-page-links']}>
          <li className={styles['page-link-item']}>
            <Link className={styles['page-link']} to="/">
              Home
            </Link>
          </li>
          <li className={styles['page-link-item']}>
            <Link className={styles['page-link']} to="/projects/list">
              Projects
            </Link>
          </li>
          <li className={styles['page-link-item']}>
            <Link className={styles['page-link']} to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className={styles['side-nav-section-divider']}></div>
        <div className={styles['social-icons']}>
          <a
            className={styles['social-icon-link']}
            href="https://www.linkedin.com/in/matt-young-691b48189/"
            target="tab"
          >
            <LinkedIn className={styles['social-icon']} fontSize="large" />
          </a>
          <a
            className={styles['social-icon-link']}
            href="https://github.com/mattgoespro"
            target="tab"
          >
            <GitHub className={styles['social-icon']} fontSize="large" />
          </a>
        </div>
      </div>
      {location.pathname === '/' && props.landingPage}
      <Outlet />
    </>
  );
}
