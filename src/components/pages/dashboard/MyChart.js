"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);
const MyChart = () => {
  return (
    <div className="w-full">
      <Line
        data={{
          labels: ["sep", "Oct", "Nov", "Dec", "may", "October"],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132],

              borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              backgroundColor: [
                "rgba(255, 99, 132, .2)",
                "rgba(54, 162, 235, .2)"
              ],
              fill: true
            },
            {
              data: [200, 250, 225, 284, 268, 232],

              borderColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              backgroundColor: [
                "rgba(255, 99, 132, .2)",
                "rgba(54, 162, 235, .2)"
              ],
              fill: true
            }
          ]
        }}
        options={{
          tension: 0.5,
          aspectRatio: 3 / 1,
          plugins: {
            legend: {
              position: "top"
            },
            title: {
              display: true,
              text: "Chart.js Line Chart"
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: false
              }
            },
            y: {
              ticks: {
                display: false
              },
              grid: {
                display: false,
                drawBorder: false
              }
            }
          }
        }}
      />
    </div>
  );
};

export default MyChart;
