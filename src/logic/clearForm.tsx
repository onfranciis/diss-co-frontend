import { Dispatch } from "react";
import { initialSignUpType, signUpAction } from "./types";

export const clearSignUp = (
  form: initialSignUpType,
  setForm: Dispatch<signUpAction>
) => {
  Object.entries(form).forEach((field) => {
    setForm({ type: field[0], payload: "" });
  });
};
