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
      text: 'Humidity in the last 30 days',
    },
  },
};

let pastDays = [...Array(30).keys()].reverse()
pastDays = [];
export let data = {
    labels:pastDays,
    datasets:[
        {}
    ]
}
async function getData(){
    let readings = await query();
    let length = Object.keys(readings).length;
    let data = []
    // for(let i = 0;i<devices.length;i++){
    //     let device = devices[i]
    //     let deviceData = []
    //     for(let t = 29;t>=0;t--){
    //         let found = false
    //         for(let d = 0;d<readings[device].length;d++){
    //             if(readings[device][d].time == t) {
    //                 deviceData.push(readings[device][d].humidity)
    //                 found = true
    //             }
    //         }
    //         if(!found) deviceData.push(null)
    //     }

    //     data.push({
    //         label:device,
    //         data:deviceData
    //     })
    // }
    for(let i = 0; i<devices.length;i++){
        let deviceSet=[];
        (readings[devices[i]]).forEach(element => {
            deviceSet.push(element.humidity);
            let time = new Date(element.time);
            pastDays.push(time.toLocaleString());
        });;
        data.push({
            label:devices[i],
            data:deviceSet
        })
    }
    return data
}

export async function genChart(){
    let sets = await getData()
    data = {
        labels: pastDays,
        datasets:sets
    }
}




