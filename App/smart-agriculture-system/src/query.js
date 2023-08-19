import { DataStore } from '@aws-amplify/datastore';
import { Readings } from './models';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports'

async function query(){
    Amplify.configure(awsconfig);
    const models = await DataStore.query(Readings,(c)=>c.User.contains("Anton"));
    let hums = [];
    for (let i = 0;i<models.length;i++){
        hums.push(models[i].humidity)
    }
    console.log(hums);
}

export default query