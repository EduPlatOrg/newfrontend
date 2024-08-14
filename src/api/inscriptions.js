import axios from './axios';

export const createEventInscription = async (data) =>
  axios.post('/inscriptions/newInscription', data);

export const getInscriptionsByEvent = async () =>
  axios.get('/events/next-events');

export const getInscriptionsByEventAndId = async (id) =>
  axios.get(`/events/next-events/${id}`);
