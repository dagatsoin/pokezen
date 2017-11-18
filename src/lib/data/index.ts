import axios from "axios";
export const Axios = axios.create({
    baseURL: "https://cors.now.sh/https://pokeapi.co/api/v2/",
    timeout: 10000
});