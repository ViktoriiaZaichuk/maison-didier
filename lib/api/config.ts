import axios, { AxiosInstance } from 'axios';

const API_URL = process.env.WORDPRESS_API_URL;

const wordpressInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default wordpressInstance;