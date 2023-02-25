import { initialSignUpType } from "./types";

export const notEmpty = (data: initialSignUpType) => {
  return !Object.values(data).includes("");
};

export const matchPasswords = (data: initialSignUpType) => {
  return data.password == data.repeatPassword;
};

export const validatePhoneNumber = (data: initialSignUpType) => {
  const first =
    data.phoneNumber.slice(0, 1) == "+" || data.phoneNumber.slice(0, 1) == "0"
      ? ""
      : data.phoneNumber.slice(0, 1);
  const second = data.phoneNumber.slice(1);
  const fullNumber = `${first}${second}`;
  return parseInt(fullNumber).toString() == fullNumber;
};

export const validatePassportNumber = (data: initialSignUpType) => {
  const largerThanZero = parseInt(data.passportNumber) > 0;
  const isANumber =
    parseInt(data.passportNumber).toString() == data.passportNumber;
  return largerThanZero && isANumber;
};
