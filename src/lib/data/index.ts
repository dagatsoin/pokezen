import axios from "axios";
export const Axios = axios.create({
    baseURL: process.env.REACT_APP_ROOT_URL || "https://calm-ravine-73007.herokuapp.com/",
    timeout: 30000
});