import axios from "axios";

const AxiosConfig = axios.create({
  baseURL: "https://api.chucknorris.io/jokes",
  responseType: "json",
  timeout: 10000,
});

export default AxiosConfig;
