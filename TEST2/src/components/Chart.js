import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    'left-y-axis': {
      type: 'linear',
      position: 'left',
      min: 0,
      max: 1000
    },
    'right-y-axis': {
      type: 'linear',
      position: 'right',
      min: 0,
      max: 10
    }
  }
};


const labels = ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05', '2020-01-06', '2020-01-07'];

function buildChartData(data) {
  return {
    labels,
    datasets: [
      { 
        type: 'bar',
        data: data[0],
        label: "First",
        backgroundColor: "#489fb0",
        order: 2
      },
      {
        type: 'bar',
        data: data[1],
        label: "Second",
        backgroundColor: "#fab73c",
        order: 2
      },
      {
        type: 'bar',
        data: data[2],
        label: "Third",
        backgroundColor:"#6d9c6d",
        order: 2
      },
      {
        type: 'line',
        data: data[3],
        label: "Forth",
        backgroundColor:"white",
        borderColor:"#db8181",
        order: 1,
        yAxisID: 'right-y-axis'
      },
      {
        type: 'line',
        data: data[4],
        label: "Fifth",
        backgroundColor:"white",
        borderColor:"#60e6c9",
        order: 1,
        yAxisID: 'right-y-axis'
      }
    ]
  }
  
};

export default function ChartView ({ chartData }) {
  return <Chart options={options} data={buildChartData(chartData)} />;
}
