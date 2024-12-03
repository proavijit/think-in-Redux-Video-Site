import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/proavijit/think-in-Redux-Video-Site',
  // baseURL: 'http://localhost:9000',
  // baseURL: 'https://delicious-equal-bayberry.glitch.me',
 
});

export default axiosInstance;