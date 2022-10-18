import { RepositoryLanguages } from '@mattgoespro/hoppingmode-web';
import { Data } from 'react-minimal-pie-chart/types/commonTypes';

// I'd be crazy to know more than 12 languages, right?
export const languageChartLabelColors = [
  '#64b5f6',
  '#4caf50',
  '#ffb74d',
  '#e57373',
  '#ff4081',
  '#b05bb3',
  '#0819EC',
  '#ED7C27',
  '#3FA0A8',
  '#BAC96B',
  '#75373F',
  '#DFCA26'
];

export function calculateChartData(languages: RepositoryLanguages): Data {
  return Object.keys(languages).map((lang, i) => ({
    title: lang,
    value: languages[lang] || 0,
    color: languageChartLabelColors[i]
  }));
}
