import axios from "axios";

const httpService = axios.create({
  baseURL: "wordgame-be-production.up.railway.app",
});

export default httpService;
