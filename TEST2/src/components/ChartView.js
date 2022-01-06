import React from 'react';
import { Chart } from 'react-chartjs-2';

export default function ChartView ({ chartData }) {
  return <Chart options={options} data={buildChartData(chartData)} />;
}

const options = {
  // responsive: true, 此為預設
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        offset: false,
      },
      ticks: {
        callback: function(item, index, ticks) {
          // 回傳空字串會保留節點，但 tick 為空
          // 回傳 undefined 或 null 節點會消失，代表 grid 也不會顯示
          return !(index % 2) ? this.getLabelForValue(item) : null;
        }
      }
    },
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

function buildChartData(data) {
  const labels = [
    '2020-01-01',
    '2020-01-02',
    '2020-01-03',
    '2020-01-04',
    '2020-01-05',
    '2020-01-06',
    '2020-01-07',
    '2020-01-08',
    '2020-01-09',
    '2020-01-10',
    '2020-01-11',
  ];

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
