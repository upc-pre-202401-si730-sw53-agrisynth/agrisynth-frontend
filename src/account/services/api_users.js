import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1";

const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
const getUserByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    const users = response.data;
    const user = users.find((user) => user.name === name);
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    const users = response.data;
    const user = users.find((user) => user.email === email);
    if (!user) {
      return false;
    }
    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};

export default {
  getUsers,
  getUserByName,
  getUserByEmail,
};
