import axios from './axios';

export const getAllResourcesRequest = () => axios.get('/edusource/all');

export const getResourceByIdRequest = (id) =>
  axios.get(`/edusource/getEdusourceById/${id}`);

export const createResourceRequest = (data) =>
  axios.post('/edusource/newEdusource', data);

export const editResourceRequest = (id, data) =>
  axios.patch(`/edusource/editEdusource/${id}`, data);

export const deleteResourceRequest = (id) =>
  axios.delete(`/edusource/deleteEdusource/${id}`);

export const getOwnResourcesRequest = (id) =>
  axios.get(`/edusource/all?creatorId=${id}`);
