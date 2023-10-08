// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Navigation, Service, Candidate } = initSchema(schema);

export {
  Navigation,
  Service,
  Candidate
};