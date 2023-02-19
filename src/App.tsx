import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Protected from "./components/Protected";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";
import { useState } from "react";
import { authTokenType, translationFileType } from "./logic/types";
import {
  TranslationContext,
  changeTranslationFile,
} from "./translations/translations";

function App() {
  const [translation, setTranslation] = useState<translationFileType>(
    changeTranslationFile("English")
  );

  const [authToken, setAuthToken] = useState<authTokenType>({
    Token: null,
    Username: null,
  });

  return (
    <TranslationContext.Provider
      value={{
        language: translation,
        setLanguage: (data) => setTranslation(changeTranslationFile(data)),
      }}
    >
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
    </TranslationContext.Provider>
  );
}

export default App;
