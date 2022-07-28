import { GithubRepositoryLanguageResponseDTO } from '../../../../shared/services/shared.model';
import ErrorNotificationService from '../../../../services/alert-notification/ErrorNotification.service';
import axios from 'axios';
import React from 'react';
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

interface LanguageChartState {
  languageComposition: GithubRepositoryLanguageResponseDTO;
  chartData: LanguageChartData;
}

class LanguageChart extends React.Component<LanguageChartProps, LanguageChartState> {
  async componentDidMount() {
    try {
      const languages = (
        await axios.get<GithubRepositoryLanguageResponseDTO>(
          `/api/repos/${this.props.projectName}/languages`
        )
      ).data;
      this.setState({
        languageComposition: languages,
        chartData: calculateChartData(languages)
      });
    } catch (e) {
      ErrorNotificationService.log(e);
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <div className="summary-language-chart-wrapper">
          <span className="summary-language-chart-title">Languages Used</span>
          {(this.state.chartData.projectLanguages.length > 0 && (
            <div className="summary-language-chart">
              <div className="summary-legend">
                {this.state.chartData.projectLanguages.map((lang, i) => {
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
                data={this.state.chartData.data}
                label={({ dataEntry }) =>
                  `${((dataEntry.value * 100) / this.state.chartData.totalValues).toFixed()}%`
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
}

export default LanguageChart;
