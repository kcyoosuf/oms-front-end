import axios from "axios";
import {
  onRequest,
  onRequestError,
  onResponse,
  onResponseError
} from "./ApiInterceptors";
const API = () => {
  const defaultOptions = {
    baseURL: "http://localhost:4000",
    headers: {
      "Content-type": "application/json"
    }
  };
  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(
    config => onRequest(config),
    error => onRequestError(error)
  );
  instance.interceptors.response.use(
    config => onResponse(config),
    error => onResponseError(error)
  );
  return instance;
};
export default API();
