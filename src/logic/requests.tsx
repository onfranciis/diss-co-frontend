import axios, { AxiosRequestConfig } from "axios";
import { axiosParameter, axiosUserParameter } from "./types";

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

export const axiosUserRequest = async ({
  url,
  method,
  data,
}: axiosUserParameter) => {
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
