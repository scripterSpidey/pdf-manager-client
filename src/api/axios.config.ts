import axios from "axios";
import { SERVER_URL } from "../constants/env";

const axiosReq = axios.create({
    baseURL: SERVER_URL,
    timeout: 10000,
    withCredentials: true
});

axiosReq.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        config.headers['Content-Type'] = 'multipart/form-data'
    } else {
        config.headers['Content-Type'] = 'application/json'
    }
    return config;
});


export default axiosReq;