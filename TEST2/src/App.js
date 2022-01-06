import { useEffect, useState } from 'react';
// import BarChart from './components/Chart';
import ChartView from './components/ChartView';
import axiosAPI from './libs/axios';

const App = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (!chartData.length) {
      Promise.all([
        axiosAPI.get('a34c5fe1-6025-4c9d-8402-5c777b685476'),
        axiosAPI.get('b6b3ee44-03f2-4d3d-84e1-1f2e68be6f7e'),
        axiosAPI.get('8e7a5232-2974-4621-a818-0985e623169e'),
        axiosAPI.get('9ef80280-6c04-4d01-ae55-e3846ba758de'),
        axiosAPI.get('7826ab76-0be2-4103-8377-9a2669942868')
      ]).then(res => {
        const result = res.map(resArray => {
          return resArray.data.map(resData => {
            return {
              x: resData[0],
              y: resData[1]
            }
          })
        })
        setChartData(result);
      });
    }
  }, [chartData.length]);
  
  return (
    <div className="container">
      <ChartView chartData={ chartData } />
    </div>
  );
}

export default App;