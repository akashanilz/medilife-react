import axios from "axios";
const instance = axios.create({
    baseURL:"http://medilife.altdive.com/"
})
export default instance;