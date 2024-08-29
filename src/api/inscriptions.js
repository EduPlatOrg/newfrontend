import axios from './axios';

export const createEventInscription = async (data) =>
  axios.post('/inscriptions/newInscription', data);

export const getInscriptionsByEvent = async () =>
  axios.get('/events/next-events');

export const getInscriptionsByEventAndId = async (id) =>
  axios.get(`/events/next-events?eventId=${id}`);

export const processInscription = async (data) =>
  axios.patch('/inscriptions/proccess-inscription', data);

export const getInscriptionsByUser = async () =>
  axios.get('/inscriptions/get-own-inscriptions');

export const deleteInscription = async (id) =>
  axios.delete(`/inscriptions/deleteInscription/${id}`);
