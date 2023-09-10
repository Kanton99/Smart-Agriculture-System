import { DataStore } from '@aws-amplify/datastore';
import { Reading } from './models';
import awsmobile from './aws-exports';
import {Amplify} from 'aws-amplify'

Amplify.configure(awsmobile)

export let devices = [];
try{
    devices = JSON.parse(localStorage.getItem("devices")).devices
}catch(error){
    localStorage.setItem("devices",JSON.stringify({"devices":[]}))
}
export async function query(){
    devices = JSON.parse(localStorage.getItem("devices")).devices
    let readings = {}
    for( let i = 0;i<devices.length;i++){
        const models = await DataStore.query(Reading,(c)=>c.device.eq(devices[i]),{sort:(s)=>s.timestamp("DESCENDING")});
        //console.log(models);
        readings[devices[i]] = new Array()
        for (let j = 0;j<models.length && j<30;j++){
            readings[devices[i]].unshift({
                "time":models[j].timestamp,
                "humidity":models[j].humidity
            })
        }
        console.log(readings)
    }
    return readings;
}
