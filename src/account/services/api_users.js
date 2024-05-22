import axios from 'axios';

<<<<<<< Updated upstream:src/collaboration/services/api_users.js
const BASE_URL = 'https://cropsphere-fake-api.onrender.com/api/';
=======
const BASE_URL = "https://cropsphere-fake-api.onrender.com/api/";
>>>>>>> Stashed changes:src/account/services/api_users.js

const getUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
const getUserByName = async (name) => {
    try {
        const response = await axios.get(`${BASE_URL}users`);
        const users = response.data;
        const user = users.find(user => user.name === name);
        if (!user) {
            return false;
        }
        return user;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
};

const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`${BASE_URL}users`);
        const users = response.data;
        const user = users.find(user => user.email === email);
        if (!user) {
            return false;
        }
        return user;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
};

export default {
    getUsers,
    getUserByName,
    getUserByEmail
};