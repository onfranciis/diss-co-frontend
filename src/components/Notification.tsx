import { Link } from "react-router-dom";
import { NotificationLoginType, NotificationType } from "../logic/types";
import {
  matchPasswords,
  validatePassportNumber,
  validatePhoneNumber,
} from "../logic/validation";
import "../styles/Notification.scss";

const Notification = ({
  config,
  closeModal,
  form,
  image,
}: NotificationType) => {
  return (
    <div
      className="NotificationParent"
      onClick={closeModal}
      style={{ display: config.display ? "flex" : "none" }}
    >
      <div className="Notification">
        {config.status == "Error" && (
          <div className="Requirements">
            <p>
              {" "}
              <span
                style={{ backgroundColor: form.name == "" ? "red" : "green" }}
              ></span>{" "}
              Name is not empty
            </p>
            <p>
              <span
                style={{ backgroundColor: form.name == "" ? "red" : "green" }}
              ></span>{" "}
              Family is not empty
            </p>
            <p>
              <span
                style={{ backgroundColor: form.email == "" ? "red" : "green" }}
              ></span>{" "}
              Email is not empty
            </p>
            <p>
              <span
                style={{
                  backgroundColor: form.password == "" ? "red" : "green",
                }}
              ></span>{" "}
              Password is not empty
            </p>
            <p>
              <span
                style={{
                  backgroundColor: form.repeatPassword == "" ? "red" : "green",
                }}
              ></span>{" "}
              Repeat Password is not empty
            </p>
            <p>
              <span
                style={{
                  backgroundColor: !matchPasswords(form) ? "red" : "green",
                }}
              ></span>{" "}
              Passwords match
            </p>
            <p>
              <span
                style={{
                  backgroundColor: form.address == "" ? "red" : "green",
                }}
              ></span>{" "}
              Address is not empty
            </p>
            <p>
              <span
                style={{
                  backgroundColor: form.phoneNumber == "" ? "red" : "green",
                }}
              ></span>{" "}
              Phone Number is not empty
            </p>
            <p>
              <span
                style={{
                  backgroundColor: !validatePhoneNumber(form) ? "red" : "green",
                }}
              ></span>{" "}
              Phone Number is a number
            </p>
            <p>
              <span
                style={{
                  backgroundColor: form.passportNumber == "" ? "red" : "green",
                }}
              ></span>{" "}
              Passport Number is not empty
            </p>
            <p>
              <span
                style={{
                  backgroundColor: !validatePassportNumber(form)
                    ? "red"
                    : "green",
                }}
              ></span>{" "}
              Passport Number is a number
            </p>
            <p>
              <span
                style={{
                  backgroundColor: image == "" ? "red" : "green",
                }}
              ></span>{" "}
              Image is not empty
            </p>
          </div>
        )}

        {config.status == "Success" && (
          <p className="Success">
            {config.message}. <br />
            You can <Link to="/login">Login</Link> now
          </p>
        )}
      </div>
    </div>
  );
};

const NotificationLogin = ({
  config,
  closeModal,
  form,
}: NotificationLoginType) => {
  return (
    <div
      className="NotificationParent"
      onClick={closeModal}
      style={{ display: config.display ? "flex" : "none" }}
    >
      <div className="Notification">
        {config.status == "Error" && (
          <div className="Requirements">
            <p>
              <span
                style={{
                  backgroundColor: form.username == "" ? "red" : "green",
                }}
              ></span>{" "}
              Username is not empty
            </p>
            <p>
              <span
                style={{
                  backgroundColor: form.password == "" ? "red" : "green",
                }}
              ></span>{" "}
              Password is not empty
            </p>
          </div>
        )}

        {config.status == "LoginError" && (
          <p className="Success">
            Username or Password not found! <br />
            You can <Link to="/signup">Sign Up</Link> if you don't have an
            account.
          </p>
        )}
      </div>
    </div>
  );
};

export { Notification, NotificationLogin };
