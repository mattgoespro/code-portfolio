import NavHeaderLogo from "@Icons/nav-header.svg";
import LinkedInLogo from "@Icons/linkedin.svg";
import GitHubLogo from "@Icons/github.svg";
import styles from "./PageNavigator.module.scss";
import { Link, Outlet } from "react-router-dom";
import AppMenu from "@Shared/Components/Menu/Menu";

export function PageNavigator() {
  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["header-logo"]}>
          <NavHeaderLogo />
        </div>
        <div className={styles.divider}></div>
        <AppMenu className={styles["page-link-overflow-menu"]}>
          <button {...{ trigger: "true" }} className={styles["page-link-menu-button"]}>
            <span className={`${styles["page-link-menu-icon"]} material-symbols-outlined`}>
              menu
            </span>
          </button>
          <Link
            className={`${styles["page-link"]} ${styles["overflow-menu-item"]}`}
            {...{ option: "Home" }}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${styles["page-link"]} ${styles["overflow-menu-item"]}`}
            {...{ option: "Projects" }}
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className={`${styles["page-link"]} ${styles["overflow-menu-item"]}`}
            {...{ option: "About" }}
            to="/about"
          >
            About
          </Link>
        </AppMenu>
        <div className={styles["page-links"]}>
          <Link className={styles["page-link"]} to="/">
            Home
          </Link>
          <Link className={styles["page-link"]} to="/projects">
            Projects
          </Link>
          <Link className={styles["page-link"]} to="/about">
            About
          </Link>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/matt-young-691b48189/" target="tab">
            <LinkedInLogo social-icon="linked" />
          </a>
          <a href="https://github.com/mattgoespro" target="tab">
            <GitHubLogo social-icon="github" />
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
}
