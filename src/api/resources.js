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

export const getOwnResourcesRequest = (page) =>
  axios.get(`/edusource/ownResources?page=${page}`);

export const manageLikes = (resourceId) =>
  axios.post(`/edusource/manage-like/${resourceId}`);
