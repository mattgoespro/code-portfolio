import styles from "./HomePage.module.scss";
import { SkillSection } from "./SkillSection/SkillSection";
import { knownDevFrameworks, knownDevLanguages, knownDevTools } from "./HomePage.data";

export function HomePage() {
  return (
    <div>
      <div className={styles["page-wave-top"]}></div>
      <div className={styles.introduction}>
        <div className={styles["introduction-text"]}>
          <h1 className={styles["greeting-title"]}>Hey</h1>
          <h2 className={styles["greeting-subtitle"]}>
            I&apos;m Matt, and this is my little corner of the web.
          </h2>
          <h2 className={styles["greeting-subtitle"]}>
            Online, I go by the alias <span className={styles.alias}>hoppingmode</span>.
          </h2>
        </div>
        <div className={styles["hoppingmode-logo"]}>
          <img src={require("@Images/Logos/HoppingmodeWeb")} />
        </div>
      </div>
      <div className={styles["languages-wave-top"]}></div>
      <SkillSection
        header="I have professional and personal experience working with a variety of programming languages"
        skillsType="languages"
        softwareSkills={knownDevLanguages(styles)}
        style={{
          backgroundColor: styles["languages-bg-color"]
        }}
      />
      <div className={styles["languages-wave-bottom"]}></div>
      <SkillSection
        header="Across a multitude of software development frameworks"
        skillsType="frameworks"
        softwareSkills={knownDevFrameworks(styles)}
        style={{ headerColor: styles["frameworks-header-color"] }}
      />
      <div className={styles["others-wave-top"]}></div>
      <SkillSection
        header="Alongside a selection of industry standard tools"
        skillsType="others"
        softwareSkills={knownDevTools}
        style={{
          headerColor: styles["others-header-color"],
          backgroundColor: styles["others-bg-color"]
        }}
      />
      {/* <div id="others" className={styles["others-section"]}>
        <div className={styles["others-header"]}>
          <h3 id="others" {...createHeaderAnimateAttrs("others", 350)}>
            Alongside a selection of industry standard tools
          </h3>
        </div>
        <div className={styles["list"]}>
          {knownDevTools.map((item, index) => {
            return (
              <div key={item.resourceIdentifier} {...createSkillAnimateAttrs(index, "others", 350)}>
                <Tooltip textHint={item.name}>
                  <img src={`/assets/images/logos/${item.resourceIdentifier}.png`} alt="Git" />
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
