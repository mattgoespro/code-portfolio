import styles from "./HomePage.module.scss";
import Tooltip from "@mui/material/Tooltip";
import { SkillSection } from "./SkillSection/SkillSection";
import { knownDevFrameworks, knownDevLanguages, knownDevTools } from "./HomePage.data";

export function HomePage() {
  return (
    <div className={styles["page-base"]}>
      <div className={styles["page-wave-top"]}></div>
      <div className={styles.introduction}>
        <div className={styles["introduction-text"]}>
          <h1>Hey</h1>
          <h2>I&apos;m Matt, and this is my little corner of the web.</h2>
          <h3>
            Online, I go by the alias <span className={styles.alias}>hoppingmode</span>.
          </h3>
        </div>
        <img className={styles.logo} src="/assets/images/hoppingmode-logo.png" />
      </div>
      <div className={styles["languages-wave-top"]}></div>
      <div className={styles["section-wrapper"]}>
        <SkillSection
          header="I have professional and personal experience working with a variety of programming languages"
          skillType="languages"
          softwareSkills={knownDevLanguages(styles)}
          style={{
            backgroundColor: styles["languages-bg-color"]
          }}
        />
      </div>
      <div className={styles["languages-wave-bottom"]}></div>
      <SkillSection
        header="Across a multitude of software development frameworks"
        skillType="frameworks"
        softwareSkills={knownDevFrameworks(styles)}
        style={{ headerColor: styles["frameworks-header-color"] }}
      />
      <div className={styles["others-wave-top"]}></div>
      <div className={styles["others-section"]}>
        <div className={styles["others-header"]}>
          <h3 id="others">Alongside a selection of industry standard tools</h3>
        </div>
        <div className={styles["list"]}>
          {knownDevTools.map((item) => {
            return (
              <div key={item.resourceIdentifier}>
                <Tooltip title={item.name}>
                  <img src={`/assets/images/logos/${item.resourceIdentifier}.png`} alt="Git" />
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
