import axios from './axios';
export const getEventById = async (id) =>
  axios.get(`/events/getEventById/${id}`);

export const createEventRequest = async (data) =>
  axios.post('/events/newEvent', data);

export const editEventRequest = async (id, data) =>
  axios.patch(`/events/editEvent/${id}`, data);

export const getAllEventsRequest = async () => axios.get('/events/all');

export const deletEventRequest = async (id) =>
  axios.delete(`/events/deleteEvent/${id}`);

export const getMyEventsRequest = async (id) =>
  axios.get(`/events/myEvents/${id}`);

export const getEmailsFromEventByEventId = async (eventId) =>
  axios.get(`/events/get-emails-from-event-id/${eventId}`);
