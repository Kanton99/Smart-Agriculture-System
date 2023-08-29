import {PubSub} from 'aws-amplify';
import {AWSIoTProvider} from "@aws-amplify/pubsub/lib/Providers"
import {CONNECTION_STATE_CHANGE, ConnectionState} from '@aws-amplify/pubsub'
import { Hub } from 'aws-amplify'

let device = 0;
//Amplify.configure(awsmobile)
export function iotCommSetup(){
try{
        PubSub.removePluggable('AWSIoTProvider');
        PubSub.addPluggable(
            new AWSIoTProvider({
                aws_pubsub_region: 'eu-central-1',
                aws_pubsub_endpoint: 'wss://a2npyp0a1upibr-ats.iot.eu-central-1.amazonaws.com/mqtt'
            })
        )
    } catch(error){
        console.error("No connection: ", error)
    }
    const fetchRecentData = () => {
        // Retrieve recent data from some sort of data storage service
    }
    
    let priorConnectionState;
    
    Hub.listen("pubsub", (data) => {
        const { payload } = data;
        if (payload.event === CONNECTION_STATE_CHANGE) {
            if (priorConnectionState === ConnectionState.Connecting && payload.data.connectionState === ConnectionState.Connected) {
            fetchRecentData();
            }
            priorConnectionState = payload.data.connectionState;
        }
    });
    
    PubSub.subscribe('sas/+/water').subscribe()
    PubSub.subscribe('sas/+/read').subscribe()
    }
async function publish(topic){
    try{
        await PubSub.publish("sas/"+device+"/"+topic,{[topic]:true});
        console.log('Message published successfully');
    }catch(error){
        console.error('Error publishing: ',error)
    }
}

export async function water(){publish("water")}
export async function read(){publish("read")}