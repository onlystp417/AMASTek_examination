// 
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  BarController,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip
} from 'chart.js';

import 'chartjs-adapter-date-fns';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  BarController,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip
);