import { RepositoryLanguages } from '@mattgoespro/hoppingmode-web';
import { PieChart } from 'react-minimal-pie-chart';
import { calculateChartData, languageChartLabelColors } from './ProjectLanguageChart.model';
import './ProjectLanguageChart.scss';

interface ProjectLanguageChartProps {
  languages: RepositoryLanguages;
}

export function ProjectLanguageChart(props: ProjectLanguageChartProps) {
  const chartData = calculateChartData(props.languages);

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
        {chartData.map((lang, i) => {
          return (
            <span
              key={lang.title}
              className="chart-legend-lang"
              style={{
                color: languageChartLabelColors[i]
              }}
            >
              {lang.title}
            </span>
          );
        })}
      </div>
      <PieChart
        className="pie-chart"
        data={chartData}
        label={(labelProps) => {
          if (labelProps.dataEntry.value > 3) {
            return `${labelProps.dataEntry.value.toFixed()}%`;
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
