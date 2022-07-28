import { GithubRepositoryLanguageResponseDTO } from '../../../../shared/services/shared.model';
import { Data } from 'react-minimal-pie-chart/types/commonTypes';

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
  languages: GithubRepositoryLanguageResponseDTO
): LanguageChartData {
  const projectLanguages = Object.keys(languages);
  const values = Object.values(languages);
  const totalValues = values.reduce((val, s) => val + s, 0);
  const data: Data = projectLanguages.map((lang, i) => ({
    title: lang,
    value: projectLanguages[lang] || 0,
    color: languageChartLabelColors[i]
  }));
  return {
    projectLanguages,
    totalValues,
    data
  };
}
