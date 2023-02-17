import { ChangeEvent, FormEvent, useReducer, useState } from "react";
import { LoginReducer, initialLogin } from "./logic/loginReducer";
import "./styles/Forms.scss";
import { axiosRequest } from "./logic/requests";
import { LoginType } from "./logic/types";
import { Navigate } from "react-router-dom";

const Login = ({ setAuthToken }: LoginType) => {
  const [received, setReceived] = useState<boolean>(false);
  const [form, setForm] = useReducer(LoginReducer, initialLogin);
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
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <p>Username</p>
          <input
            type="text"
            value={form.username}
            id="username"
            name="username"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="password">
          <p>Password</p>
          <input
            type="password"
            value={form.password}
            id="password"
            name="password"
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Login" />
      </form>

      <a href="/signup">New user? Sign Up</a>
    </div>
  );
};

export default Login;
