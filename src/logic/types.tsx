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

// HOME
export type axiosUserParameter = {
  url: string;
  method: string;
  data: { username: string; token: string | null };
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

// IMAGE
export type imageURLType = string | Blob | ArrayBuffer;

// TRANSLATION
export type translationFileType = {
  username: string;
  Login: string;
  Username: string;
  Password: string;
  NewUser: string;

  Name: string;
  Family: string;
  Email: string;
  RepeatPassword: string;
  Address: string;
  phoneNumber: string;
  passportNumber: string;
  SignUp: string;
  Already: string;
};

export type TranslationContextType = {
  language: translationFileType;
  setLanguage: (data: string) => void;
};
