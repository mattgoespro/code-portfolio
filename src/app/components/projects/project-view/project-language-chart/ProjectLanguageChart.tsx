import { PieChart } from 'react-minimal-pie-chart';
import { ProjectLanguageComposition } from 'src/app/shared/shared.model';
import { calculateChartData, languageChartLabelColors } from './ProjectLanguageChart.model';
import './ProjectLanguageChart.scss';

interface LanguageChartProps {
  languageComposition: ProjectLanguageComposition;
}

export function ProjectLanguageChart(props: LanguageChartProps) {
  const chartData = calculateChartData(props.languageComposition);

  // return (
  //   <div>
  //     {(chartData?.projectLanguages.length > 0 && (

  //     )) || (
  //       <span className="languages-none-found">
  //         <i>No recognized languages found.</i>
  //       </span>
  //     )}
  //   </div>
  // );

  return (
    <div className="chart-wrapper">
      <div className="chart-legend">
        {chartData?.projectLanguages.map((lang, i) => {
          return (
            <span
              key={lang}
              className="chart-legend-lang"
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
  );
}
