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
  editUserByIdRequest,
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
    sessionStorage.setItem('preLoginUrl', window.location.pathname);
    const logWithToken = async () => {
      const response = await logInWithTokenRequest();

      if (response.status === 200) {
        setUser(response.data);
        setIsAuthenticated(true);
        const preLoginUrl = sessionStorage.getItem('preLoginUrl');

        navigate(preLoginUrl);
        await getAllUsers();
      }
    };
    logWithToken();
  }, []);

  const registerUserRequest = async (data) => {
    try {
      const response = await registerRequest(data);

      setIsAuthenticated(false);
      return response;
    } catch (error) {
      console.log(error, '<-- error en el registerUserRecuest');
      setUserError(error);
    }
  };

  const verifyTokenRequest = async (token) => {
    try {
      const response = sendTokenToServer(token);

      return response;
    } catch (error) {
      console.log(error, '<-- error en verifyTokenRequest');
    }
  };

  const logOutUser = async () => {
    logOutRequest(user);
    setUser(null);
    setIsAuthenticated(false);

    navigate('/');
  };

  const loginUserRequest = async (data) => {
    sessionStorage.setItem('preLoginUrl', window.location.pathname);
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
      const preLoginUrl = sessionStorage.getItem('preLoginUrl');
      navigate(preLoginUrl);
      await getAllUsers();
    } catch (error) {
      console.log(error, '<-- error en loginUserRequest');
      setUserError(error);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersRequest();

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

      return response;
    } catch (error) {
      setUserError([error.response.data]);
    }
  };

  const resetPassword = async (email) => {
    try {
      const response = await resetPasswordRequest(email);

      return response;
    } catch (error) {
      setUserError([error.response.data]);
    }
  };

  const editUserById = async (id, data) => {
    try {
      const response = await editUserByIdRequest(id, data);

      return response;
    } catch (error) {
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
        editUserById,

        // <-- van todas las funciones del los grupos para exportarlas
      }}>
      {children}
    </UserContext.Provider>
  );
};
