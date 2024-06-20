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
      }
    };
    logWithToken();
  }, []);

  const registerUserRequest = async (data) => {
    try {
      console.log(data);
      const response = await registerRequest(data);
      console.log('response --->', response.data);

      setIsAuthenticated(true);
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
    } catch (error) {
      console.log(error, '<-- error en loginUserRequest');
      setUserError(error);
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

        // <-- van todas las funciones del los grupos para exportarlas
      }}>
      {children}
    </UserContext.Provider>
  );
};
