import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.11.154:3333",
});

export default api;