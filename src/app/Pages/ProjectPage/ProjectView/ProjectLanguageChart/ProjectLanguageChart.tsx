import { ProgrammingLanguages } from '@mattgoespro/hoppingmode-web';
import { Pie } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';

// I'd be crazy to know more than 6 languages, right?
export const chartColors = ['#ffb74d', '#aed581', '#4db6ac', '#4fc3f7', '#ba68c8', '#f06292'];
export const chartHoverColors = ['#ff9800', '#8bc34a', '#009688', '#03a9f4', '#9c27b0', '#e91e63'];

interface ProjectLanguageChartProps {
  languages: ProgrammingLanguages;
}

export function ProjectLanguageChart(props: ProjectLanguageChartProps) {
  const options: ChartOptions<'pie'> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        labels: {
          font: {
            family: 'Nunito Sans',
            size: 14,
            weight: '100'
          },
          boxWidth: 20,
          boxHeight: 20,
          padding: 5,
          color: 'white'
        }
      },
      tooltip: {
        bodyFont: {
          family: 'Nunito Sans',
          size: 14,
          weight: '300'
        },
        boxPadding: 10,
        boxHeight: 25,
        callbacks: {
          label: (chartSection) => {
            return `${chartSection.label}: ${chartSection.raw}%`;
          }
        }
      }
    }
  };

  function createChartData(languages: ProgrammingLanguages): ChartData<'pie'> {
    return {
      labels: Object.keys(languages),
      datasets: [
        {
          data: Object.values(languages),
          backgroundColor: Object.keys(languages).map((_, index) => chartColors[index]),
          hoverBackgroundColor: Object.keys(languages).map((_, index) => chartColors[index])
        }
      ]
    };
  }

  return (
    <>
      {Object.keys(props.languages).length > 0 && (
        <Pie data={createChartData(props.languages)} options={options}></Pie>
      )}
    </>
  );
}
