import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { LoginReducer, initialLogin } from "./logic/loginReducer";
import "./styles/Forms.scss";
import { axiosRequest } from "./logic/requests";
import { LoginType } from "./logic/types";
import { Navigate } from "react-router-dom";
import { useTranslationContext } from "./translations/translations";
import LanguageDropdown from "./components/LanguageDropdown";

const Login = ({ setAuthToken }: LoginType) => {
  const [received, setReceived] = useState<boolean>(false);
  const [form, setForm] = useReducer(LoginReducer, initialLogin);
  const { language, setLanguage } = useTranslationContext();
  const url = import.meta.env.VITE_LOGIN;
  const method = "post";
  const data = form;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ type: e.currentTarget.name, payload: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { status, message } = await axiosRequest({ url, method, data });
    const { token, description } = await message;
    if (status) {
      setAuthToken(token, form.username);
      setReceived(true);
    }
  };

  return received ? (
    <Navigate to="/" />
  ) : (
    <div className="Form">
      <h2>{language.Login}</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <p>{language.Username}</p>
          <input
            type="text"
            value={form.username}
            id="username"
            name="username"
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

        <input type="submit" value={language.Login} />
      </form>

      <a href="/signup">{language.NewUser}</a>
      <LanguageDropdown onChange={(data) => setLanguage(data)} />
    </div>
  );
};

export default Login;
