/**
 * @param resourceIdentifier The identifier for a stylesheet variable or image
 * asset name.
 */
export interface SoftwareSkills {
  resourceIdentifier: string;
  label: string;
}

const titleFadeInDelay = 100;

export const devLanguages: SoftwareSkills[] = [
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

export const devFrameworks: SoftwareSkills[] = [
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

export const devTools: SoftwareSkills[] = [
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

export function skillTitleFadeIn(triggerName: string) {
  return {
    'data-aos': 'fade-left',
    'data-aos-anchor': `#${triggerName}`,
    'data-aos-anchor-placement': 'center',
    'data-aos-offset': 400,
    'data-aos-duration': 400,
    'data-aos-delay': titleFadeInDelay
  };
}

export function skillScrollIn(index: number, triggerName: string) {
  return {
    'data-aos': 'fade-left',
    'data-aos-anchor': `#${triggerName}`,
    'data-aos-anchor-placement': 'center',
    'data-aos-offset': 400,
    'data-aos-duration': 400,
    'data-aos-delay': titleFadeInDelay + 300 + 100 * index
  };
}
