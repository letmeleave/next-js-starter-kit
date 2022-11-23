import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://BASEURL/api/',
});

axiosInstance.interceptors.request.use(
  (request) => {
    // Type request middleware here
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Type response middleware here
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
