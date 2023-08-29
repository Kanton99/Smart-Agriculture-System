import './App.css';

import { water,read, iotCommSetup } from './IotComms.js';
import {Amplify, Auth} from 'aws-amplify';
import awsmobile from './aws-exports'
import { withAuthenticator } from '@aws-amplify/ui-react';

import {Line} from "react-chartjs-2";
import {data, options,genChart} from './genGraphs.js'

import { registerDevice } from './registerDevice';

Amplify.configure(awsmobile)

const user = await Auth.currentUserInfo()

iotCommSetup()
await genChart()
function App() {

  return (
    <>
    <Line options={options} data={data}></Line>
    <input type='button' value='Water plants' onClick={water}/>
    <input type='button' value='Read humidity' onClick={read}/>
    <input type='button' value='Register device' onClick={registerDevice}/>
    </>
  );
}

export default withAuthenticator(App,true);
