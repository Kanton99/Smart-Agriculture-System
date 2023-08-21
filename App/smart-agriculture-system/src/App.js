import logo from './logo.svg';
import './App.css';

import {Chart as ChartJS, ArcElement, Tooltip, Legend, LinearScale, PointElement,LineElement} from 'chart.js/auto';
import {Chart, Doughnut, Line} from "react-chartjs-2";
import query from './query';

const time_hum = await query();
ChartJS.register(LinearScale,LineElement,PointElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Humidity in the last 30 days',
    },
  },
};

let labels = []
for(let i = 0;i<time_hum.length;i++){
  labels.push(time_hum[i][0])
}
let humidity = new Array()
for(let i = 0;i<time_hum.length;i++){
  humidity.push(time_hum[i][1])
}
export const data = {
  labels,
  datasets:[
    {
      label: 'Humidity over time',
      data:time_hum,
      borderColor: 'rgb(255,100,100)',
      backgroundColor:'rgba(255,99,132,0.5'
    }
  ]
}

function App() {

  return (
    <Line options={options} data={data}></Line>
  );
}

export default App;
