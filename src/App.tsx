import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Protected from "./components/Protected";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";
import { authTokenType } from "./logic/types";

function App() {
  const [authToken, setAuthToken] = useState<authTokenType>({
    Token: null,
    Username: null,
  });
  return (
    <Router>
      <Routes>
        <Route element={<Protected Token={authToken.Token} />}>
          <Route
            path="/"
            element={
              <Home
                authToken={authToken}
                signOut={() => setAuthToken({ Token: null, Username: null })}
              />
            }
          />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/login"
          element={
            <Login
              setAuthToken={(Token, Username) => {
                setAuthToken({ Token, Username });
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
