import axios from "axios";

//Chamada da API com o axios
const api = axios.create({
  baseURL: "http://localhost:8081",
});

export default api;
