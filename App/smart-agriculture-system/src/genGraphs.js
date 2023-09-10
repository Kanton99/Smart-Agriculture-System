import {Chart as ChartJS, LinearScale, PointElement,LineElement} from 'chart.js/auto';
import {query, devices} from './query';


ChartJS.register(LinearScale,LineElement,PointElement);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Humidity in the last 30 readings',
    },
    autoPadding:false
  },
};

let pastDays = [...Array(30).keys()].reverse()
pastDays = [];
export let data = {
    labels:[],
    datasets:[
        {}
    ]
}
async function getData(){
    let readings = await query();
    let data1 = []
    for(let i = 0; i<devices.length;i++){
        let deviceSet=[];
        (readings[devices[i]]).forEach(element => {
            deviceSet.push(element.humidity);
            let time = new Date(element.time);
            if(!pastDays.includes(time.toLocaleString())) pastDays.push(time.toLocaleString());
        });;
        data1.push({
            label:devices[i],
            data:deviceSet
        })
    }
    return data1
}

export async function genChart(){
    let sets = await getData()
    data = {
        labels: pastDays,
        datasets:sets
    }
}




