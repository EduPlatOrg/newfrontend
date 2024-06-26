import axios from './axios';

export const contactMeForm = (data) => axios.post('/contact/support', data);

export const colaborateForm = (data) => axios.post('/contact/colaborate', data);
