import axios from "axios";

const httpService = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export default httpService;