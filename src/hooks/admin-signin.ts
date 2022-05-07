import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../contexts/user-context";
import { signIn } from "../services/auth";
import { getUserFromLocal, saveUserToLocal } from "../utils";

const useAdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setisSigningIn] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const handleSignIn = () => {
    setError("");
    if (email === "" || password === "") {
      return setError("Please fill in your email and password!");
    }
    setisSigningIn(true);
    signIn({ email, password })
      .then((res) => {
        console.log(res.data);
        // Save token to local storage
        saveUserToLocal(res.data.tokens.access.token);
        setUser(getUserFromLocal());
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
export default useAdminSignIn;
