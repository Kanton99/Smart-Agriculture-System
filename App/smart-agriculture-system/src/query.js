import { DataStore } from '@aws-amplify/datastore';
import { Reading } from './models';

async function query(){
    const models = await DataStore.query(Reading);
    let hums = [];
    for (let i = 0;i<models.length;i++){
        hums.push([new Date(models[i].timestamp).getUTCDate(),models[i].humidity])
    }
    return hums;
}

export default query