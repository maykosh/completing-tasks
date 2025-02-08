import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://todo.de-code.uz/api", 
});

const authInterceptor = (config: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error("Ошибка при получении токена:", error);
  }

  return config;
};

api.interceptors.request.use(authInterceptor);

export { api };
