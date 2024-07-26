import axios from './axios';

export const sendNewValoration = async (valoration) =>
  axios.post('/valorations/newValoration', valoration);

export const deleteValoration = async (valoration) =>
  axios.delete(`/valorations/remove/${valoration._id}`);

export const rejectValoration = async (valoration) =>
  axios.put(`/valorations/reject/${valoration._id}`);

export const acceptValoration = async (valoration) =>
  axios.put(`/valorations/accept/${valoration._id}`);

export const sendNewUserValoration = async (valoration) =>
  axios.post('/valorations/newUserValoration', valoration);
