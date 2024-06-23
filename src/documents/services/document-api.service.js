import axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1/documents';

export const getAllDocuments = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching documents:", error);
        throw error;
    }
};

export const uploadDocument = async (formData) => {
    try {
        const response = await axios.post(BASE_URL, formData);
        console.log("Server response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error uploading document:", error);
        throw error;
    }
};

export const updateDocument = async (documentId, updateData) => {
    try {
        await axios.patch(`${BASE_URL}/${documentId}`, updateData);
    } catch (error) {
        console.error(`Error updating document with ID ${documentId}:`, error);
        throw error;
    }
};

export const deleteDocument = async (documentId) => {
    try {
        await axios.delete(`${BASE_URL}/${documentId}`);
    } catch (error) {
        console.error(`Error deleting document with ID ${documentId}:`, error);
        throw error;
    }
};
