import { PieChart } from 'react-minimal-pie-chart';
import { ProjectLanguageComposition } from '@shared/services/shared.model';
import { calculateChartData, languageChartLabelColors } from './LanguageChart.model';
import './LanguageChart.scss';

interface LanguageChartProps {
  languageComposition: ProjectLanguageComposition;
}

function LanguageChart(props: LanguageChartProps) {
  const chartData = calculateChartData(props.languageComposition);

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
