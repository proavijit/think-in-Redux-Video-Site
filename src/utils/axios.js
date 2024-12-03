import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000',
  // baseURL: 'https://delicious-equal-bayberry.glitch.me',
 
});

export default axiosInstance;