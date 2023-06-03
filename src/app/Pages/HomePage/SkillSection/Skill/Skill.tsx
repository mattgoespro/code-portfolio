import { SoftwareSkill } from "./Skill.model";
import styles from "./Skill.module.scss";

interface SkillProps {
  softwareSkill: SoftwareSkill;
  titled?: boolean;
  animationProps: { [key: string]: unknown };
}

export function Skill(props: SkillProps) {
  const icon = (
    <img
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      src={require(`@Images/Logos/Technologies/${props.softwareSkill.resourceIdentifier}.png`)}
      className={props.titled ? styles["icon-regular"] : styles["icon-large"]}
    />
  );

  return (
    <div
      key={props.softwareSkill.resourceIdentifier}
      className={`${styles.wrapper}` + (props.titled ? ` ${styles.padded}` : "")}
      style={{
        borderColor: props.titled
          ? props.softwareSkill.experienced
            ? styles["experience-border-color"]
            : styles["regular-border-color"]
          : null
      }}
      {...props.animationProps}
    >
      <div className={styles["brand-icon"]}>{icon}</div>
      {props.titled ? (
        <div
          className={styles.skill}
          style={{ color: styles[`color-${props.softwareSkill.resourceIdentifier}`] }}
        >
          <div className={styles.name} style={{ color: props.softwareSkill.styles.nameColor }}>
            {props.softwareSkill.name}
          </div>
          <div
            className={styles["name-underline"]}
            style={
              {
                "--name-underline-color": props.softwareSkill.styles.nameColor
              } as unknown
            }
          ></div>
        </div>
      ) : null}
    </div>
  );
}
