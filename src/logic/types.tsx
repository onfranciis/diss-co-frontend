// SIGN UP
export type initialSignUpType = {
  name: string;
  family: string;
  email: string;
  password: string;
  repeatPassword: string;
  address: string;
  phoneNumber: string;
  passportNumber: string;
};

export type signUpAction = {
  type: string;
  payload: string;
};

// LOGIN
export type initialLoginType = {
  username: string;
  password: string;
};

export type LoginAction = {
  type: string;
  payload: string;
};

// AXIOS
export type axiosParameter = {
  url: string;
  method: string;
  data: FormData | initialLoginType;
};
