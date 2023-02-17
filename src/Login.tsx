import { ChangeEvent, FormEvent, useReducer } from "react";
import { LoginReducer, initialLogin } from "./logic/loginReducer";
import "./styles/Forms.scss";

const Login = () => {
  const [form, setForm] = useReducer(LoginReducer, initialLogin);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ type: e.currentTarget.name, payload: e.currentTarget.value });
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
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
