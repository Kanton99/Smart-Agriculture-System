import logo from './logo.svg';
import './App.css';

import {Chart as ChartJS, LinearScale, PointElement,LineElement} from 'chart.js/auto';
import {Line} from "react-chartjs-2";
import query from './query';

import { water } from './IotComms.js';
import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react';

try{
  await Amplify.configure(awsmobile)
}catch(error){
  console.error(error)
}

Auth.currentCredentials().then((info) => {
  const cognitoIdentityId = info.identityId;
  console.log(cognitoIdentityId)
});

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
    <>
    <Line options={options} data={data}></Line>
    <input type='button' value='Water plants' onClick={water}></input>
    <input type='button' value='Read humidity'></input>
    </>
  );
}

export default App;
