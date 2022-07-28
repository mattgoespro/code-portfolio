import { GithubRepositoryLanguageResponseDTO } from '../../../../shared/services/shared.model';
import ErrorNotificationService from '../../../../services/error-notification/ErrorNotification.service';
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
  const [languages, setLanguages] = useState<GithubRepositoryLanguageResponseDTO>({
    languages: null
  });
  const [chartData, setChartData] = useState<LanguageChartData>(null);

  useEffect(() => {
    try {
      axios
        .get<GithubRepositoryLanguageResponseDTO>(`/api/repos/${props.projectName}/languages`)
        .then((resp) => {
          setLanguages(resp.data);
          setChartData(calculateChartData(languages));
        });
    } catch (err) {
      ErrorNotificationService.log(err);
    }
  }, []);

  return (
    <div>
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
              data={chartData.data}
              label={({ dataEntry }) =>
                `${((dataEntry.value * 100) / chartData.totalValues).toFixed()}%`
              }
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

export default LanguageChart;
