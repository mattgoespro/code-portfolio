import { GitHub, LinkedIn } from '@mui/icons-material';
import { hideLoadingOverlay } from '@redux/reducers/loading-overlay-slice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
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
        <ul>
          <li>
            <Link className={styles['page-link']} to="/">
              Home
            </Link>
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

          <div className={styles['social-icons']}>
            <a
              className={styles['social-icon-link']}
              href="https://www.linkedin.com/in/matt-young-691b48189/"
              target="tab"
            >
              <LinkedIn className={styles['social-icon']} fontSize="medium" />
            </a>
            <a
              className={styles['social-icon-link']}
              href="https://github.com/mattgoespro"
              target="tab"
            >
              <GitHub className={styles['social-icon']} fontSize="medium" />
            </a>
          </div>
        </ul>
      </div>
      <div className={styles['content-outlet']}>
        {location.pathname === '/' && props.landingPage}
        <Outlet />
      </div>
    </>
  );
}
