/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState, useEffect } from 'react';
import {
  getAllResourcesRequest,
  getResourceByIdRequest,
  createResourceRequest,
  editResourceRequest,
  getOwnResourcesRequest,
} from '../api/resources';
import { useUser } from './UserContext';

export const ResourcesContext = createContext();

export const useResources = () => {
  const context = useContext(ResourcesContext);
  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context;
};

export const ResourcesProvider = ({ children }) => {
  const { user } = useUser();
  const [resources, setResources] = useState([]);
  const [currentResource, setCurrentResource] = useState(null);
  const [myResources, setMyResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const response = await getAllResources();

      setResources(response.edusources);
    };
    fetchResources();
    if (user && user._id) {
      getOwnResources(user._id);
    }
  }, []);

  const getAllResources = async () => {
    try {
      const response = await getAllResourcesRequest();

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getResourceById = async (id) => {
    try {
      const response = await getResourceByIdRequest(id);
      if (response.status === 200) {
        setCurrentResource(response.data);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const createNewResource = async (resource) => {
    try {
      const response = await createResourceRequest(resource);
      if (response.status === 200) {
        setResources([...resources, response.data.edusource]);
        setMyResources([...myResources, response.data.edusource]);
      }
      return response.status;
    } catch (error) {
      console.error(error);
    }
  };

  const editResource = async (id, resource) => {
    try {
      const response = await editResourceRequest(id, resource);
      if (response.status === 200) {
        const updatedResources = resources.map((rec) =>
          rec._id === id ? response.data.modifiedEdusource : rec
        );
        setResources(updatedResources);
      }
      return response.status;
    } catch (error) {
      console.error(error);
    }
  };

  const getOwnResources = async (id) => {
    try {
      const response = await getOwnResourcesRequest(id);
      if (response.status === 200) {
        setMyResources(response.data.edusources);
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ResourcesContext.Provider
      value={{
        resources,
        setResources,
        currentResource,
        setCurrentResource,
        getResourceById,
        createNewResource,
        editResource,
        myResources,
        setMyResources,
        getOwnResources,
      }}>
      {children}
    </ResourcesContext.Provider>
  );
};
