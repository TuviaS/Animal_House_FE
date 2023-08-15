import axios from 'axios';

let url = 'http://localhost:8080';

export const axiosConfig = {
    baseURL: url,
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    }
};
axios.defaults.withCredentials = false;

export const axiosInstance = axios.create(axiosConfig);
