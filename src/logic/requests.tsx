import axios, { AxiosRequestConfig } from "axios";
import { axiosParameter } from "./types";

export const axiosRequest = ({ url, method, data }: axiosParameter) => {
  const config: AxiosRequestConfig = {
    url,
    method,
    data,
  };

  axios(config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
