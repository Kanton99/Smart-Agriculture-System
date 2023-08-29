// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UsersDevices, Reading } = initSchema(schema);

export {
  UsersDevices,
  Reading
};