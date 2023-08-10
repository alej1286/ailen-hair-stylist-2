// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Services, Candidate } = initSchema(schema);

export {
  Services,
  Candidate
};