// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Readings } = initSchema(schema);

export {
  Readings
};