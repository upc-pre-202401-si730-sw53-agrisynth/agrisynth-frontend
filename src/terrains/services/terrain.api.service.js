
import axios from "axios";

// URL base para la API falsa de terrenos
const BASE_URL = "https://cropsphere-fake-api.onrender.com/api";

// Método para obtener todos los terrenos
export const getAllTerrains = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/terrains`);
    return response.data;
  } catch (error) {
    console.error("Error fetching terrains:", error);
    throw error;
  }
};

// Método para obtener un terreno por su ID
export const getTerrainById = async (terrainId) => {
  try {
    const response = await axios.get(`${BASE_URL}/terrains`);
    const terrains = response.data;
    const terrain = terrains.find((terrain) => terrain.id === terrainId);
    if (!terrain) {
      return false;
    }
    return terrain;
  } catch (error) {
    console.error(`Error fetching terrain with ID ${terrainId}:`, error);
    throw error;
  }
};

// Método para crear un nuevo terreno
export const createTerrain = async (terrainData) => {
  try {
    const response = await axios.post(`${BASE_URL}/terrains`, terrainData);
    return response.data;
  } catch (error) {
    console.error("Error creating terrain:", error);
    throw error;
  }
};

// Método para actualizar un terreno existente
export const updateTerrain = async (terrainId, terrainData) => {
  try {
    const response = await axios.put(
        `${BASE_URL}/terrains/${terrainId}`,
        terrainData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating terrain with ID ${terrainId}:`, error);
    throw error;
  }
};

// Método para eliminar un terreno por su ID
export const deleteTerrain = async (terrainId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/terrains/${terrainId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting terrain with ID ${terrainId}:`, error);
    throw error;
  }
};

/*export const getTerrainById = async (terrainId) => {
  try {
    const response = await axios.get(`${BASE_URL}/terrains/${terrainId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching terrain with ID ${terrainId}:`, error);
    throw error;
  }
};*/