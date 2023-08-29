import {default as fetch, Request} from 'node-fetch'

// Replace these with your own values
const APP_SYNC_API_URL = "https://jkhz5bncizcohg2wh5xwr4ch7e.appsync-api.eu-central-1.amazonaws.com/graphql";
const API_KEY = "da2-dxzz7tgbrrgjrff6ce7aq7y2hy";

const query = `
            mutation CreateReading($input: CreateReadingInput!) {
                createReading(input: $input) {
                    id
                    humidity
                    device
                    timestamp
                }
            }
        `;

export async function handler(event, context) {
    const readId = context.awsRequestId
    const readDevice = event.device
    const readTime = event.timestamp
    const humidity = event.humidity
    // Prepare the GraphQL mutation
    
    
    const variables = {
        input: {
            id: readId,
            humidity: humidity,
            device: readDevice,
            timestamp: readTime
        }
    };
    
    const options = {
        method: 'POST',
        headers: {
            'x-api-key':API_KEY,
            'Content-Type':'application/json'
        },
        body: JSON.stringify({query,variables})
    };

    const request = new Request(APP_SYNC_API_URL,options)
    let body;
    let statusCode = 200
    let response
    try {
        response = await fetch(request);
        body = await response.json();
        if (body.errors) statusCode = 400
    } catch (error) {
        statusCode = 400;
        body = {
            errors: [
                {
                status: response.status,
                message: error.message,
                stack: error.stack
                }
            ]
        };
    }

    return {
        statusCode,
        body: body
    }
};
