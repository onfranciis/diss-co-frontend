import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { initialSignUp, signUpReducer } from "./logic/signUpReducer";
import "./styles/Forms.scss";
import ImageInput from "./components/ImageInput";
import { axiosRequest } from "./logic/requests";
import { toBase64 } from "./logic/base64";
import {
  matchPasswords,
  notEmpty,
  validatePassportNumber,
  validatePhoneNumber,
} from "./logic/validation";
import { useTranslationContext } from "./translations/translations";
import LanguageDropdown from "./components/LanguageDropdown";
import { NotificationSignUp } from "./components/Notification";
import { NotificationSignUpType } from "./logic/types";
import { clearSignUp } from "./logic/clearForm";
const url = import.meta.env.VITE_SIGNUP;
const method = "post";

const SignUp = () => {
  const [form, setForm] = useReducer(signUpReducer, initialSignUp);
  const { language, setLanguage } = useTranslationContext();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<
    NotificationSignUpType["config"]
  >({
    display: false,
    status: "",
    message: "",
  });
  const [imageURL, setImageURL] = useState<string | (string | Blob)>("");
  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("family", form.family);
  formData.append("email", form.email);
  formData.append("password", form.password);
  formData.append("address", form.address);
  formData.append("phoneNumber", form.phoneNumber);
  formData.append("passportNumber", form.passportNumber);
  formData.append("image", imageURL);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ type: e.currentTarget.name, payload: e.currentTarget.value });
  };

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const File = e.target.files![0];
    toBase64(File, (data) => {
      setImageURL(data);
      setForm({ type: "image", payload: data });
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (notification.display) console.log("Exists");
    if (
      notEmpty(form) &&
      matchPasswords(form) &&
      validatePhoneNumber(form) &&
      validatePassportNumber(form) &&
      imageURL !== ""
    ) {
      setLoading(true);
      const { data } = await axiosRequest({ url, method, data: formData });
      if (data?.status) {
        setLoading(false);
        clearSignUp(form, setForm);
        setImageURL("");
        setNotification({
          display: true,
          status: "Success",
          message: data.message.Description,
        });
      }
    } else {
      setNotification({
        ...notification,
        display: true,
        status: "Error",
      });
    }
  };

  return (
    <div className="Form">
      <NotificationSignUp
        config={notification}
        form={form}
        image={imageURL}
        closeModal={() => setNotification({ ...notification, display: false })}
      />
      <h2>{language.SignUp}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>{language.Name}</p>
          <input
            type="text"
            value={form.name}
            id="name"
            name="name"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="family">
          <p>{language.Family}</p>
          <input
            type="text"
            value={form.family}
            id="family"
            name="family"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          <p>{language.Email}</p>
          <input
            type="email"
            value={form.email}
            id="email"
            name="email"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          <p>{language.Password}</p>
          <input
            type="password"
            value={form.password}
            id="password"
            name="password"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="repeatPassword">
          <p>{language.RepeatPassword}</p>
          <input
            type="password"
            value={form.repeatPassword}
            id="repeatPassword"
            name="repeatPassword"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address">
          <p>{language.Address}</p>
          <input
            type="address"
            value={form.address}
            id="address"
            name="address"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phoneNumber">
          <p>{language.phoneNumber}</p>
          <input
            type="tel"
            value={form.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="passportNumber">
          <p>{language.passportNumber}</p>
          <input
            type="text"
            value={form.passportNumber}
            id="passportNumber"
            name="passportNumber"
            onChange={handleChange}
          />
        </label>

        <ImageInput onImageChange={imageChange} />

        <input type="submit" value={language.SignUp} disabled={loading} />
      </form>

      <a href="/login">{language.Already}</a>
      <LanguageDropdown onChange={(data) => setLanguage(data)} />
    </div>
  );
};

export default SignUp;
