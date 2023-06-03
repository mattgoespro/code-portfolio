import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  LinearScale
} from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "./ProjectLanguageChart.module.scss";
import { ProjectCodingLanguagesDTO } from "@mattgoespro/hoppingmode-web-core";

ChartJS.register(ArcElement, LinearScale, Tooltip, Legend);

// I'd be crazy to know more than 6 languages, right?
export const chartColors = ["#ffb74d", "#aed581", "#4db6ac", "#4fc3f7", "#ba68c8", "#f06292"];
export const chartHoverColors = ["#ff9800", "#8bc34a", "#009688", "#03a9f4", "#9c27b0", "#e91e63"];

interface ProjectLanguageChartProps {
  codingLanguages: ProjectCodingLanguagesDTO;
}

export function ProjectLanguageChart(props: ProjectLanguageChartProps) {
  const options: ChartOptions<"pie"> = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        text: "Languages Used"
      },
      legend: {
        position: "left",
        labels: {
          font: {
            family: "Nunito",
            size: 16,
            weight: "100"
          },
          boxWidth: 20,
          boxHeight: 20,
          padding: 15,
          color: "#ffffff",
          filter: (item) => item.index < 4,
          sort: (label1, label2) => label1.text.localeCompare(label2.text)
        }
      },
      tooltip: {
        bodyFont: {
          family: "Nunito",
          size: 16,
          weight: "100"
        },
        boxPadding: 10,
        boxHeight: 25,
        callbacks: {
          label: (chartSection) => `${chartSection.raw}%`
        }
      }
    }
  };

  function createChartData(languages: ProjectCodingLanguagesDTO): ChartData<"pie"> {
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
    (Object.keys(props.codingLanguages || {}).length > 0 && (
      <div className={`${styles.container} ${styles["pie-chart-container"]}`}>
        <Pie data={createChartData(props.codingLanguages)} options={options} />
      </div>
    )) || (
      <div className={`${styles.container} ${styles["no-languages-container"]}`}>
        No languages recognized
      </div>
    )
  );
}
