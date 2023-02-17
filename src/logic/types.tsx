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

export type LoginType = {
  setAuthToken: (Token: string, Username: string) => void;
};

// AXIOS
export type axiosParameter = {
  url: string;
  method: string;
  data: FormData | initialLoginType;
};

// AUTHTOKEN
export type authTokenType = {
  Token: string | null;
  Username: string | null;
};

// PROTECTED
export type protectedType = {
  Token: string | null;
};

// HOME
export type homePropsType = {
  authToken: authTokenType;
  signOut: () => void;
};
