import axios from "axios";
import {authenticationInterceptor} from "@/iam/services/authentication.interceptor.js";

const API_BASE_URL = "https://agrisynthservice-production.up.railway.app/api/v1";

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
});

// Add authentication interceptor
http.interceptors.request.use(authenticationInterceptor);

// Export the http object
export default http;
