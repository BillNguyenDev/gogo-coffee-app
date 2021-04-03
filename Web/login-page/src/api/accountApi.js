import axiosClient from "./axiosClient";

const accountApi = {
  register(data) {
    const url = "/account/createUser";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/account/login";
    return axiosClient.post(url, data);
  },
};    

export default accountApi;
