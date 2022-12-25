/**
 * @param resourceIdentifier The identifier for a stylesheet variable or image
 * asset name.
 */
export interface SoftwareEngineeringSkills {
  resourceIdentifier: string;
  name: string;
  experienced?: boolean;
}

export const devLanguages: SoftwareEngineeringSkills[] = [
  { resourceIdentifier: 'java', name: 'Java', experienced: true },
  {
    resourceIdentifier: 'javascript',
    name: 'JavaScript',
    experienced: true
  },
  {
    resourceIdentifier: 'typescript',
    name: 'TypeScript',
    experienced: true
  },
  {
    resourceIdentifier: 'sass',
    name: 'SASS',
    experienced: true
  },
  {
    resourceIdentifier: 'c-sharp',
    name: '.NET'
  },
  { resourceIdentifier: 'dart', name: 'Dart' }
];

export const devFrameworks: SoftwareEngineeringSkills[] = [
  { resourceIdentifier: 'node', name: 'Node', experienced: true },
  { resourceIdentifier: 'react', name: 'React', experienced: true },
  { resourceIdentifier: 'angular', name: 'Angular', experienced: true },
  { resourceIdentifier: 'postgresql', name: 'PostgreSQL', experienced: true },
  { resourceIdentifier: 'docker', name: 'Docker', experienced: true },
  { resourceIdentifier: 'spring', name: 'Spring', experienced: true },
  {
    resourceIdentifier: 'express',
    name: 'express.js'
  },
  { resourceIdentifier: 'flutter', name: 'Flutter' }
];

export const devTools: SoftwareEngineeringSkills[] = [
  {
    resourceIdentifier: 'html',
    name: 'HTML'
  },
  {
    resourceIdentifier: 'CSS',
    name: 'CSS'
  },
  {
    resourceIdentifier: 'git',
    name: 'Git'
  },
  {
    resourceIdentifier: 'aws',
    name: 'Amazon Web Services'
  },
  {
    resourceIdentifier: 'webpack',
    name: 'webpack'
  },
  {
    resourceIdentifier: 'docker-compose',
    name: 'docker-compose'
  },
  {
    resourceIdentifier: 'nginx',
    name: 'nginx'
  },
  {
    resourceIdentifier: 'kafka',
    name: 'Kafka'
  }
];
