import { SoftwareSkill } from "./SkillSection/Skill/Skill.model";

export const knownDevLanguages = (styles: unknown) => {
  return [
    {
      resourceIdentifier: "java",
      name: "Java",
      experienced: true,
      yearsExperience: 4,
      styles: { nameColor: styles["color-java"] }
    },
    {
      resourceIdentifier: "javascript",
      name: "JavaScript",
      experienced: true,
      yearsExperience: 3.5,
      styles: { nameColor: styles["color-javascript"] }
    },
    {
      resourceIdentifier: "typescript",
      name: "TypeScript",
      experienced: true,
      yearsExperience: 3.5,
      styles: { nameColor: styles["color-typescript"] }
    },
    {
      resourceIdentifier: "sass",
      name: "SASS",
      experienced: true,
      yearsExperience: 3.5,
      styles: { nameColor: styles["color-sass"] }
    },
    {
      resourceIdentifier: "c-sharp",
      name: ".NET",
      styles: { nameColor: styles["color-csharp"] }
    },
    { resourceIdentifier: "dart", name: "Dart", styles: { nameColor: styles["color-dart"] } }
  ];
};

export const knownDevFrameworks = (styles: unknown): SoftwareSkill[] => {
  return [
    {
      resourceIdentifier: "node",
      name: "Node",
      experienced: true,
      yearsExperience: 3.5,
      styles: { nameColor: styles["color-node"] }
    },
    {
      resourceIdentifier: "react",
      name: "React",
      experienced: true,
      yearsExperience: 2,
      styles: { nameColor: styles["color-react"] }
    },
    {
      resourceIdentifier: "angular",
      name: "Angular",
      experienced: true,
      yearsExperience: 3.5,
      styles: { nameColor: styles["color-angular"] }
    },
    {
      resourceIdentifier: "postgresql",
      name: "PostgreSQL",
      experienced: true,
      yearsExperience: 4,
      styles: { nameColor: styles["color-postgresql"] }
    },
    {
      resourceIdentifier: "docker",
      name: "Docker",
      experienced: true,
      yearsExperience: 2,
      styles: { nameColor: styles["color-docker"] }
    },
    {
      resourceIdentifier: "spring",
      name: "Spring",
      experienced: true,
      yearsExperience: 3,
      styles: { nameColor: styles["color-spring"] }
    },
    {
      resourceIdentifier: "express",
      name: "express.js",
      styles: { nameColor: styles["color-express"] }
    },
    {
      resourceIdentifier: "flutter",
      name: "Flutter",
      styles: { nameColor: styles["color-flutter"] }
    }
  ];
};

export const knownDevTools: SoftwareSkill[] = [
  {
    resourceIdentifier: "html",
    name: "HTML"
  },
  {
    resourceIdentifier: "CSS",
    name: "CSS"
  },
  {
    resourceIdentifier: "git",
    name: "Git"
  },
  {
    resourceIdentifier: "aws",
    name: "Amazon Web Services"
  },
  {
    resourceIdentifier: "webpack",
    name: "webpack"
  },
  {
    resourceIdentifier: "docker-compose",
    name: "docker-compose"
  },
  {
    resourceIdentifier: "nginx",
    name: "nginx"
  },
  {
    resourceIdentifier: "kafka",
    name: "Kafka"
  }
];
