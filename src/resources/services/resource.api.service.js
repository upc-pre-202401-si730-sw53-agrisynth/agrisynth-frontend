import axios from "axios";

// URL base para la API falsa de terrenos
const BASE_URL = "http://localhost:3000";

// Método para obtener todos los terrenos
export const getAllResources = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/resources`);
    return response.data;
  } catch (error) {
    console.error("Error fetching resources:", error);
    throw error;
  }
};

// Método para obtener un terreno por su ID
export const getResourceById = async (resourceId) => {
  try {
    const response = await axios.get(`${BASE_URL}/resources/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching resource with ID ${resourceId}:`, error);
    throw error;
  }
};

// Método para crear un nuevo terreno
export const createResource = async (resourceData) => {
  try {
    const response = await axios.post(`${BASE_URL}/resources`, resourceData);
    return response.data;
  } catch (error) {
    console.error("Error creating resource:", error);
    throw error;
  }
};

// Método para actualizar un terreno existente
export const updateResource = async (resourceId, resourceData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/resources/${resourceId}`,
      resourceData,
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating resource with ID ${resourceId}:`, error);
    throw error;
  }
};

// Método para eliminar un terreno por su ID
export const deleteResource = async (resourceId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/resources/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting resource with ID ${resourceId}:`, error);
    throw error;
  }
};
