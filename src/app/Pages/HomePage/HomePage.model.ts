/**
 * @param resourceIdentifier The identifier for a stylesheet variable or image
 * asset name.
 */
export interface SoftwareEngineeringSkills {
  resourceIdentifier: string;
  name: string;
  experienced?: boolean;
  yearsExperience?: number;
}

export type TechnicalSkillType = "languages" | "frameworks" | "other";

export const devLanguages: SoftwareEngineeringSkills[] = [
  { resourceIdentifier: "java", name: "Java", experienced: true, yearsExperience: 4 },
  {
    resourceIdentifier: "javascript",
    name: "JavaScript",
    experienced: true,
    yearsExperience: 3.5
  },
  {
    resourceIdentifier: "typescript",
    name: "TypeScript",
    experienced: true,
    yearsExperience: 3.5
  },
  {
    resourceIdentifier: "sass",
    name: "SASS",
    experienced: true,
    yearsExperience: 3.5
  },
  {
    resourceIdentifier: "c-sharp",
    name: ".NET"
  },
  { resourceIdentifier: "dart", name: "Dart" }
];

export const devFrameworks: SoftwareEngineeringSkills[] = [
  { resourceIdentifier: "node", name: "Node", experienced: true, yearsExperience: 3.5 },
  { resourceIdentifier: "react", name: "React", experienced: true, yearsExperience: 2 },
  { resourceIdentifier: "angular", name: "Angular", experienced: true, yearsExperience: 3.5 },
  { resourceIdentifier: "postgresql", name: "PostgreSQL", experienced: true, yearsExperience: 4 },
  { resourceIdentifier: "docker", name: "Docker", experienced: true, yearsExperience: 2 },
  { resourceIdentifier: "spring", name: "Spring", experienced: true, yearsExperience: 3 },
  {
    resourceIdentifier: "express",
    name: "express.js"
  },
  { resourceIdentifier: "flutter", name: "Flutter" }
];

export const devTools: SoftwareEngineeringSkills[] = [
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
