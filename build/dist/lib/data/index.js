import axios from "axios";
export var Axios = axios.create({
    baseURL: process.env.REACT_APP_ROOT_URL,
    timeout: 30000
});
//# sourceMappingURL=index.js.map