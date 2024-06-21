/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import {
  logInWithTokenRequest,
  logOutRequest,
  registerRequest,
  sendLoginUserRequest,
  sendTokenToServer,
  getAllUsersRequest,
  resetPasswordRequest,
  editPasswordRequest,
} from '../api/user';

import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context;
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const [userError, setUserError] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const logWithToken = async () => {
      const response = await logInWithTokenRequest();
      console.log(
        response.data,
        '<-- response.data en useEffect de UserContext'
      );
      if (response.status === 200) {
        setUser(response.data);
        setIsAuthenticated(true);
        await getAllUsers();
      }
    };
    logWithToken();
  }, []);

  const registerUserRequest = async (data) => {
    try {
      console.log(data);
      const response = await registerRequest(data);
      console.log('response --->', response.data);

      setIsAuthenticated(false);
      return response;
    } catch (error) {
      console.log(error, '<-- error en el registerUserRecuest');
      setUserError(error);
    }
  };

  const verifyTokenRequest = async (token) => {
    sendTokenToServer(token);
  };

  const logOutUser = async () => {
    logOutRequest(user);
    setUser(null);
    setIsAuthenticated(false);
    console.log('deslogueado');
    navigate('/');
  };

  const loginUserRequest = async (data) => {
    try {
      const userToLogIn = {
        ...data,
        isLogged: true,
      };
      const response = await sendLoginUserRequest(userToLogIn);

      const userToLogin = response.data;

      if (userToLogin.isVerified === false) {
        throw new Error('No se pudo loguear, verifique su correo electronico');
      }

      setUser(userToLogin);
      setIsAuthenticated(true);
      await getAllUsers();
    } catch (error) {
      console.log(error, '<-- error en loginUserRequest');
      setUserError(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersRequest();
      console.log(response.data, '<-- response.data en getAllUsers');
      setAllUsers(response?.data?.allUsers);
    } catch (error) {
      console.log(error, '<-- error en getAllUsersRequest');
      setUserError(error);
    }
  };

  const editPassword = async (values) => {
    // Aqui solo hace falta enviar el newPassword
    try {
      const response = await editPasswordRequest(values);
      console.log(response.data, 'response .data del editCurrentUser');

      return response;
    } catch (error) {
      console.log(error.response.data);
      setUserError([error.response.data]);
    }
  };

  const resetPassword = async (email) => {
    console.log(email, 'password, id');
    try {
      const response = await resetPasswordRequest(email);
      console.log(response.data, 'response .data del editCurrentUser');

      return response;
    } catch (error) {
      console.log(error.response.data);
      setUserError([error.response.data]);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerUserRequest,
        isAuthenticated,
        setIsAuthenticated,
        userError,
        setUserError,
        logOutUser,
        verifyTokenRequest,
        loginUserRequest,
        allUsers,
        setAllUsers,
        selectedUser,
        setSelectedUser,
        editPassword,
        resetPassword,

        // <-- van todas las funciones del los grupos para exportarlas
      }}>
      {children}
    </UserContext.Provider>
  );
};
