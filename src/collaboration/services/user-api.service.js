// services/user-api.service.js
import axios from 'axios';

const baseURL = 'http://localhost:3000/members';

export default {
    fetchUsers() {
        return axios.get(baseURL);
    },
    fetchUser(id) {
        return axios.get(`${baseURL}/${id}`);
    },
    addUser(user) {
        return axios.post(baseURL, user);
    },
    updateUser(id, user) {
        return axios.put(`${baseURL}/${id}`, user);
    },
    deleteUser(id) {
        return axios.delete(`${baseURL}/${id}`);
    }
}
