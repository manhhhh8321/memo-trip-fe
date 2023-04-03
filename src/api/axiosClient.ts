import axios from "axios";
import * as queryString from "query-string";
import { store } from "@redux";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL ?? "http://localhost:3000/api",

    headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },

    paramsSerializer: (params) => queryString.default.stringify(params),
});

axiosClient.interceptors.request.use((config: any) => {
    // const token = await getFirebaseToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    //
    const token = store.getState().auth.auth?.accessToken;

    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response;
        }
        return response;
    },

    (error: any) => {
        // Handle errors
        if (error.response && error.response.status === 401) {
            //logout
        }
        throw error;
    }
);

export { axiosClient };
