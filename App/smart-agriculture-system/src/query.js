import { DataStore } from '@aws-amplify/datastore';
import { Reading } from './models';
import awsmobile from './aws-exports';
import {Amplify} from 'aws-amplify'

Amplify.configure(awsmobile)

const _MS_PER_DAY = 1000*60*60*24;
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
        const models = await DataStore.query(Reading,(c)=>c.device.eq(devices[i]),{sort:(s)=>s.timestamp("ASCENDING")});
        readings[devices[i]] = new Array()
        for (let j = 0;j<models.length;j++){
            let today = Date.now();
            let readDay = new Date(models[i].timestamp);
            let diff = Math.floor((today-readDay)/_MS_PER_DAY)
            readings[devices[i]].push({
                "time":diff,
                "humidity":models[i].humidity
            })
        }
    }
    return readings;
}
