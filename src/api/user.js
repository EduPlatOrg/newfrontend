import axios from './axios';

// en las rutas utilizaremos el axios importado asi desde la instancia.
export const registerRequest = (user) => axios.post('/user/register', user);

export const logInWithTokenRequest = () =>
  axios.get('/user/user/logInWithToken');

export const logOutRequest = (user) => axios.get('/user/logout', user);

export const sendTokenToServer = (token) =>
  axios.post(`/user/user/verify/${token}`);

export const sendLoginUserRequest = (data) => axios.post('/user/login', data);

export const getAllUsersRequest = () => axios.get('/user/getAllUsers');

export const resetPasswordRequest = (email) =>
  axios.post(`/user/forgotPassword`, email);

export const editPasswordRequest = (password) =>
  axios.patch(`/user/resetPassword`, { password });
