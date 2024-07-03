/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState, useEffect } from 'react';
import {
  getAllRecourcesRequest,
  getRecourceByIdRequest,
  createRecourceRequest,
  editRecourceRequest,
  getOwnRecourcesRequest,
} from '../api/recources';
import { useUser } from './UserContext';

export const RecourcesContext = createContext();

export const useRecources = () => {
  const context = useContext(RecourcesContext);
  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context;
};

export const RecourcesProvider = ({ children }) => {
  const { user } = useUser();
  const [recources, setRecources] = useState([]);
  const [currentRecource, setCurrentRecource] = useState(null);
  const [myRecources, setMyRecources] = useState([]);

  useEffect(() => {
    const fetchRecources = async () => {
      const response = await getAllRecources();

      setRecources(response.edusources);
    };
    fetchRecources();
    if (user && user._id) {
      getOwnRecources(user._id);
    }
  }, []);

  const getAllRecources = async () => {
    try {
      const response = await getAllRecourcesRequest();

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getRecourceById = async (id) => {
    try {
      const response = await getRecourceByIdRequest(id);
      if (response.status === 200) {
        setCurrentRecource(response.data);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createNewRecource = async (recource) => {
    try {
      const response = await createRecourceRequest(recource);
      if (response.status === 200) {
        setRecources([...recources, response.data.edusource]);
        setMyRecources([...myRecources, response.data.edusource]);
      }
      return response.status;
    } catch (error) {
      console.error(error);
    }
  };

  const editRecource = async (id, recource) => {
    try {
      const response = await editRecourceRequest(id, recource);
      if (response.status === 200) {
        const updatedRecources = recources.map((rec) =>
          rec._id === id ? response.data.modifiedEdusource : rec
        );
        setRecources(updatedRecources);
      }
      return response.status;
    } catch (error) {
      console.error(error);
    }
  };

  const getOwnRecources = async (id) => {
    try {
      const response = await getOwnRecourcesRequest(id);
      if (response.status === 200) {
        setMyRecources(response.data.edusources);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RecourcesContext.Provider
      value={{
        recources,
        setRecources,
        currentRecource,
        setCurrentRecource,
        getRecourceById,
        createNewRecource,
        editRecource,
        myRecources,
        setMyRecources,
        getOwnRecources,
      }}>
      {children}
    </RecourcesContext.Provider>
  );
};
