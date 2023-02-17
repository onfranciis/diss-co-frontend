import { initialSignUpType, signUpAction } from "./types";

export const initialSignUp: initialSignUpType = {
  name: "",
  family: "",
  email: "",
  password: "",
  repeatPassword: "",
  address: "",
  phoneNumber: "",
  passportNumber: "",
};

export const signUpReducer = (
  state: initialSignUpType,
  action: signUpAction
): initialSignUpType => {
  switch (action.type) {
    case action.type:
      return { ...state, [action.type]: action.payload };

    default:
      return state;
  }
};
