import axios from "axios";

const backendApiUrl = process.env.REACT_APP_BACKEND_API_URL;

const backendAPI = axios.create({
  baseURL: backendApiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default backendAPI;
