import axios from 'axios';
import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Data } from 'react-minimal-pie-chart/types/commonTypes';
import { GithubRepository } from '../../ProjectList';

interface ProjectLanguageChartProps {
  project: GithubRepository;
}

export default function ProjectLanguageChart(props: ProjectLanguageChartProps) {
  const { project } = props;
  const [languageComposition, setLanguageComposition] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    axios.get<{ [key: string]: number }>(`http://api:3000/api/repos/${project.name}/languages`).then((rsp) => {
      setLanguageComposition(rsp.data);
    });
  }, []);

  const legendLabelColors = [
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

  const languages = Object.keys(languageComposition);
  const values = Object.values(languageComposition);
  const total = values.reduce((val, s) => val + s, 0);
  const chartData: Data = languages.map((lang, i) => ({
    title: lang,
    value: languageComposition[lang] || 0,
    color: legendLabelColors[i]
  }));

  return (
    <div>
      <div className="summary-language-chart-wrapper">
        <span className="summary-language-chart-title">Languages Used</span>
        {(languages.length > 0 && (
          <div className="summary-language-chart">
            <div className="summary-legend">
              {languages.map((lang, i) => {
                return (
                  <span
                    key={lang}
                    className="summary-legend-lang"
                    style={{
                      color: legendLabelColors[i]
                    }}
                  >
                    {lang}
                  </span>
                );
              })}
            </div>
            <PieChart
              data={chartData}
              label={({ dataEntry }) => `${((dataEntry.value * 100) / total).toFixed()}%`}
              labelStyle={{
                fontSize: '3px',
                fontFamily: 'Roboto'
              }}
              labelPosition={70}
              animate={true}
              style={{ width: '300px', margin: 10 }}
            />
          </div>
        )) || (
          <span className="summary-language-none-found">
            <i>No recognized languages found.</i>
          </span>
        )}
      </div>
    </div>
  );
}
