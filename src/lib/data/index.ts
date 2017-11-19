import axios from "axios";
export const Axios = axios.create({
    baseURL: process.env.REACT_APP_ROOT_URL,
    timeout: 10000
});