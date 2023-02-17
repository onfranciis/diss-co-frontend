import { initialLoginType, LoginAction } from "./types";

export const initialLogin: initialLoginType = {
  username: "",
  password: "",
};

export const LoginReducer = (
  state: initialLoginType,
  action: LoginAction
): initialLoginType => {
  switch (action.type) {
    case action.type:
      return { ...state, [action.type]: action.payload };

    default:
      return state;
  }
};
