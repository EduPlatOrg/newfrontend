import axios from './axios';

export const getAllRecourcesRequest = () => axios.get('/edusource/all');

export const getRecourceByIdRequest = (id) =>
  axios.get(`/edusource/getEdusourceById/${id}`);

export const createRecourceRequest = (data) =>
  axios.post('/edusource/newEdusource', data);

export const editRecourceRequest = (id, data) =>
  axios.patch(`/edusource/editEdusource/${id}`, data);

export const deleteRecourceRequest = (id) =>
  axios.delete(`/edusource/deleteEdusource/${id}`);

export const getOwnRecourcesRequest = (id) =>
  axios.get(`/edusource/all?creatorId=${id}`);
