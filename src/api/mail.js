import axios from './axios';

export const contactMeForm = (data) => axios.post('/contact/support', data);
