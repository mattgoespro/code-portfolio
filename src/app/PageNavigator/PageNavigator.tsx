import GitHubLogo from "@SVG/Icons/GitHub.svg";
import NavHeaderLogo from "@SVG/Icons/Hoppingmode.svg";
import LinkedInLogo from "@SVG/Icons/LinkedIn.svg";
import { Link, Outlet } from "react-router-dom";
import { AppMenu } from "@Components/Menu/Menu";
import styles from "./PageNavigator.module.scss";

export function PageNavigator() {
  return (
    <>
      <div className={styles["navbar"]}>
        <div className={styles["header-logo"]}>
          <NavHeaderLogo />
        </div>
        <div className={styles.divider}></div>
        <AppMenu className={styles["page-link-overflow-menu"]}>
          {{
            trigger: (
              <button {...{ trigger: "true" }} className={styles["page-link-menu-button"]}>
                <span className={`${styles["page-link-menu-icon"]} material-symbols-outlined`}>
                  menu
                </span>
              </button>
            ),
            options: [
              { title: "Home", route: "/" },
              { title: "Projects", route: "/projects" },
              { title: "About", route: "/about" }
            ].map((link) => {
              return (
                <Link
                  key={link.title}
                  className={`${styles["page-link"]} ${styles["overflow-menu-item"]}`}
                  to={link.route}
                >
                  {link.title}
                </Link>
              );
            })
          }}
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
      <div className={styles.padder}></div>
      <Outlet />
    </>
  );
}
