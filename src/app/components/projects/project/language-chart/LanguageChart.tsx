import { GithubRepositoryLanguageResponseDTO } from '@shared/services/shared.model';
import ErrorNotificationService from '../../../../shared/services/error-notification/ErrorNotification.service';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import {
  calculateChartData,
  LanguageChartData,
  languageChartLabelColors
} from './LanguageChart.model';
import './LanguageChart.scss';

interface LanguageChartProps {
  projectName: string;
}

function LanguageChart(props: LanguageChartProps) {
  const [chartData, setChartData] = useState<LanguageChartData>(null);

  useEffect(() => {
    const ac = new AbortController();

    axios
      .get<GithubRepositoryLanguageResponseDTO>(`/api/repos/${props.projectName}/languages`)
      .then((resp) => {
        setChartData(calculateChartData(resp.data));
      })
      .catch((err) => ErrorNotificationService.log(err));

    return () => ac.abort();
  }, []);

  return (
    <div className="summary-language-chart-wrapper">
      <span className="summary-language-chart-title">Languages Used</span>
      {(chartData?.projectLanguages.length > 0 && (
        <div className="summary-language-chart">
          <div className="summary-legend">
            {chartData?.projectLanguages.map((lang, i) => {
              return (
                <span
                  key={lang}
                  className="summary-legend-lang"
                  style={{
                    color: languageChartLabelColors[i]
                  }}
                >
                  {lang}
                </span>
              );
            })}
          </div>
          <PieChart
            className="pie-chart"
            data={chartData.data}
            label={(labelProps) => {
              const percentagePortion = (labelProps.dataEntry.value * 100) / chartData.totalValues;

              if (percentagePortion > 3) {
                return `${percentagePortion.toFixed()}%`;
              }

              return '';
            }}
            labelStyle={{
              fontSize: '3px',
              fontFamily: 'Roboto'
            }}
            labelPosition={70}
            animate={true}
          />
        </div>
      )) || (
        <span className="summary-language-none-found">
          <i>No recognized languages found.</i>
        </span>
      )}
    </div>
  );
}

export default LanguageChart;
