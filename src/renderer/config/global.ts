import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const baseOpts = {
  baseURL: "http://localhost:5000/",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
};

export const gatewayApi = axios.create(baseOpts);

const successHandler = (res: AxiosResponse): Promise<AxiosResponse> => {
  return new Promise((resolve) => resolve(res));
};
const errorHandler = async (error: AxiosError) => {
  if (!error.response) {
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

const addAuth = (request: InternalAxiosRequestConfig) => {
  const { headers } = request;
  headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`;
  return request;
};

gatewayApi.interceptors.request.use((req) => addAuth(req));
gatewayApi.interceptors.response.use(
  (res) => successHandler(res),
  (err) => errorHandler(err)
);
