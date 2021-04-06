import { API_ROUTES } from "../constants";
import axiosClient from "./axiosClient";

const accountApi = {
  register(data) {
    const url = "/account/createUser";
    return axiosClient.post(url, data);
  },
  login(data) {
    return axiosClient.post(API_ROUTES.LOGIN, data);
  },
};

export default accountApi;
