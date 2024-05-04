import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllMachinary = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/machinary`);
        return response.data;
    } catch (error) {
        console.error('Error fetching machinary:', error);
        throw error;
    }
};
