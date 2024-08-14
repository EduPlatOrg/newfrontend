import axios from './axios';

export const createEventInscription = async (data) =>
  axios.post('/inscriptions/newInscription', data);

export const getInscriptionsByEvent = async () =>
  axios.get('/events/next-events');
