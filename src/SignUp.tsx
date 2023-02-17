import { ChangeEvent, FormEvent, useReducer } from "react";
import { initialSignUp, signUpReducer } from "./logic/signUpReducer";
import "./styles/Forms.scss";
import ImageInput from "./components/ImageInput";

const SignUp = () => {
  const [form, setForm] = useReducer(signUpReducer, initialSignUp);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ type: e.currentTarget.name, payload: e.currentTarget.value });
  };

  const imageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const File = e.target.files![0];
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="Form">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            value={form.name}
            id="name"
            name="name"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="family">
          <p>Family</p>
          <input
            type="text"
            value={form.family}
            id="family"
            name="family"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          <p>Email</p>
          <input
            type="email"
            value={form.email}
            id="email"
            name="email"
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

        <label htmlFor="repeatPassword">
          <p>Repeat Password</p>
          <input
            type="password"
            value={form.repeatPassword}
            id="repeatPassword"
            name="repeatPassword"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="address">
          <p>Address</p>
          <input
            type="address"
            value={form.address}
            id="address"
            name="address"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="phoneNumber">
          <p>Phone Number</p>
          <input
            type="tel"
            value={form.phoneNumber}
            id="phoneNumber"
            name="phoneNumber"
            onChange={handleChange}
          />
        </label>

        <label htmlFor="passportNumber">
          <p>Passport Number</p>
          <input
            type="number"
            value={form.passportNumber}
            id="passportNumber"
            name="passportNumber"
            onChange={handleChange}
          />
        </label>

        <ImageInput onImageChange={imageChange} />

        <input type="submit" value="Sign Up" />
      </form>

      <a href="/login">Already have an account? Login</a>
    </div>
  );
};

export default SignUp;
