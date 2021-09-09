import axios from "axios";
const instance = axios.create({
    baseURL:"http://medilife.altdive.com/api"
})
export default instance;