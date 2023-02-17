import axios, { AxiosRequestConfig } from "axios";
import { axiosParameter } from "./types";

export const axiosRequest = async ({ url, method, data }: axiosParameter) => {
  const config: AxiosRequestConfig = {
    url,
    method,
    data,
  };

  return await axios(config)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return {
        status: false,
        message: {
          token: null,
          description: err.message,
        },
      };
    });
};
