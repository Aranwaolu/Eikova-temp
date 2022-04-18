import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userSignIn } from "../services/auth";
import { saveUserToLocal } from "../utils";

const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setisSigningIn] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const handleSignIn = () => {
    setError("");
    if (email === "" || password === "") {
      return setError("Please fill in your email and password!");
    }
    setisSigningIn(true);
    userSignIn({ email, password })
      .then((res) => {
        console.log(res.data);
        // Save token to local storage
        saveUserToLocal(res.data.tokens);
        // Save to user context setUser(getUserFromLocal())
        history.push("/");
      })
      .catch((err) => {
        setisSigningIn(false);
        if (err.response?.status >= 400 && err.response?.status < 500) {
          setError(err.response.data.message);
        } else {
          setError("An error occurred please try again");
        }
      });
  };
  return { setEmail, setPassword, handleSignIn, error, isSigningIn };
};
export default useSignIn;
