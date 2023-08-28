import {PubSub, Amplify} from 'aws-amplify';
import {MqttOverWSProvider, AWSIoTProvider} from "@aws-amplify/pubsub/lib/Providers"
import awsmobile from './aws-exports'

Amplify.configure(
    {
        Auth:{
            identityPoolId:awsmobile['aws_cognito_identity_pool_id'],
            region: awsmobile['aws_project_region'], // REQUIRED - Amazon Cognito Region
        }
    }
)

try{
    Amplify.addPluggable(
        new MqttOverWSProvider({
            aws_pubsub_endpoint: "a2npyp0a1upibr-ats.iot.eu-central-1.amazonaws.com"
        })
        // new AWSIoTProvider({
        //         aws_pubsub_region: awsmobile.aws_appsync_region,
        //         aws_pubsub_endpoint: 'wss://a2npyp0a1upibr-ats.iot.eu-central-1.amazonaws.com/mqtt',
        //     })
    )
    console.log("Connection established")
} catch(error){
    console.error("No connection: ", error)
}

export async function water(){
    try{
        await PubSub.publish("sas/0/water",{msg:"{'water':true}"});
        console.log('Message published successfully');
    }catch(error){
        console.error('Error publishing: ',error)
    }
}