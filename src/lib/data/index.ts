import axios from "axios";
export const Axios = axios.create({
    baseURL: "https://calm-ravine-73007.herokuapp.com/",
    timeout: 30000
});