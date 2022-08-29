import { ProjectLanguageComposition } from '@shared';
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

export interface LanguageChartData {
  projectLanguages: string[];
  totalValues: number;
  data: Data;
}

export function calculateChartData(
  languageComposition: ProjectLanguageComposition
): LanguageChartData {
  const projectLanguages = Object.keys(languageComposition);
  const projectLanguageUsages = Object.values(languageComposition);
  const totalValues = projectLanguageUsages.reduce((val, s) => val + s, 0);
  const data: Data = projectLanguages.map((lang, i) => ({
    title: lang,
    value: languageComposition[lang] || 0,
    color: languageChartLabelColors[i]
  }));
  return {
    projectLanguages,
    totalValues,
    data
  };
}
