import { Link, Outlet } from "react-router-dom";
import NavHeaderLogo from "@Icons/nav-header.svg";
import LinkedInLogo from "@Icons/linkedin.svg";
import GitHubLogo from "@Icons/github.svg";
import styles from "./PageNavigator.module.scss";

export function PageNavigator() {
  return (
    <>
      <div className={styles["side-nav"]}>
        <div className={styles["header-logo"]}>
          <NavHeaderLogo />
        </div>
        <ul className={styles["page-links"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link className={styles["page-link"]} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles["page-link"]} to="/about">
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
      <Outlet />
    </>
  );
}
