import axios from './axios';

export const sendNewValoration = async (valoration) =>
  axios.post('/valorations/newValoration', valoration);
