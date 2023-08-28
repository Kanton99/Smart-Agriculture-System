// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Reading } = initSchema(schema);

export {
  Reading
};