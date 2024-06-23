import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

export const getAllMachinary = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/machinery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching machinery:", error);
    throw error;
  }
};
