/**
 * @param resourceIdentifier The identifier for a stylesheet variable or image
 * asset name.
 */
export interface SoftwareEngineeringSkills {
  resourceIdentifier: string;
  label: string;
}

export const devLanguages: SoftwareEngineeringSkills[] = [
  {
    resourceIdentifier: 'javascript',
    label: 'JavaScript'
  },
  {
    resourceIdentifier: 'typescript',
    label: 'TypeScript'
  },
  {
    resourceIdentifier: 'sass',
    label: 'SASS'
  },
  { resourceIdentifier: 'java', label: 'Java' },
  {
    resourceIdentifier: 'c-sharp',
    label: '.NET'
  },
  { resourceIdentifier: 'dart', label: 'Dart' }
];

export const devFrameworks: SoftwareEngineeringSkills[] = [
  { resourceIdentifier: 'node', label: 'Node' },
  { resourceIdentifier: 'react', label: 'React' },
  { resourceIdentifier: 'angular', label: 'Angular' },
  { resourceIdentifier: 'postgresql', label: 'PostgreSQL' },
  { resourceIdentifier: 'docker', label: 'Docker' },
  { resourceIdentifier: 'spring', label: 'Spring' },
  {
    resourceIdentifier: 'express',
    label: 'express.js'
  },
  { resourceIdentifier: 'flutter', label: 'Flutter' }
];

export const devTools: SoftwareEngineeringSkills[] = [
  {
    resourceIdentifier: 'html',
    label: 'HTML'
  },
  {
    resourceIdentifier: 'CSS',
    label: 'CSS'
  },
  {
    resourceIdentifier: 'git',
    label: 'Git'
  },
  {
    resourceIdentifier: 'aws',
    label: 'Amazon Web Services'
  },
  {
    resourceIdentifier: 'webpack',
    label: 'webpack'
  },
  {
    resourceIdentifier: 'docker-compose',
    label: 'docker-compose'
  },
  {
    resourceIdentifier: 'nginx',
    label: 'nginx'
  },
  {
    resourceIdentifier: 'kafka',
    label: 'Kafka'
  }
];
