import axios from "axios";

const BASE_URL = "https://cropsphere-fake-api.onrender.com/api";

export const getAllMachinary = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/machinery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching machinary:", error);
    throw error;
  }
};
