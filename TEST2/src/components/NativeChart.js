// import Chart from 'chart.js/auto';
// import { useEffect, useRef } from 'react';

// export default function BarChart({ data }) {
//   const chartRef = useRef();
//   useEffect(() => {
//     // data 資料還沒進來的話就不要做任何動作
//     if (!data.length) return null;

//     // 取得要渲染的 element
//     const ctx = chartRef.current.getContext("2d");

//     // 實例化 Chart
//     new Chart(ctx, {
// 			data: {
//         // x 軸的項目
// 				labels: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05', '2020-01-06', '2020-01-07'],
//         // 要渲染的 data
// 				datasets: [
//           { 
//             type: 'bar',
//             data: data[0],
//             label: "First",
//             backgroundColor: "#489fb0",
//             order: 2,
//             yAxisID: 'left-y-axis'
//           },
//           {
//             type: 'bar',
//             data: data[1],
//             label: "Second",
//             backgroundColor: "#fab73c",
//             order: 2,
//             yAxisID: 'left-y-axis'
//           },
//           {
//             type: 'bar',
//             data: data[2],
//             label: "Third",
//             backgroundColor:"#6d9c6d",
//             order: 2,
//             yAxisID: 'left-y-axis'
//           },
//           {
//             type: 'line',
//             data: data[3],
//             label: "Forth",
//             backgroundColor:"white",
//             borderColor:"#db8181",
//             order: 1,
//             yAxisID: 'right-y-axis'
//           },
//           {
//             type: 'line',
//             data: data[4],
//             label: "Fifth",
//             backgroundColor:"white",
//             borderColor:"#60e6c9",
//             order: 1,
//             yAxisID: 'right-y-axis'
//           }
// 				],
//         //其他相關設定
//         options: {
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               type: 'timeseries',
//               min: '2020-01-03',
//               max: '2022-01-07'
//             },
//             'left-y-axis': {
//               type: 'linear',
//               position: 'left',
//               max: 1000
//             },
//             'right-y-axis': {
//                 type: 'linear',
//                 position: 'right',
//             }
//           }
//         }
// 			},
//     })

//   }, [ data ]); 
  
//   return (
//     <canvas
//       id="myChart"
//       ref={chartRef}
//     />
//   )
// }