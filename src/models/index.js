// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Navigation, Service, Candidate, Appointment } = initSchema(schema);

export {
  User,
  Navigation,
  Service,
  Candidate,
  Appointment
};