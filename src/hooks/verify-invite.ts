import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { completeResgistration, verifyInvite } from "../services/auth";

const useVerifyInvite = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get("token") || "";
  const [user, setUser] = useState({ username: "", email: "", token });
  const [userInput, setUserInput] = useState({
    position: "",
    department: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState("");

  const [error, setError] = useState("");
  const [signUpLoading, setSignUpLoading] = useState(false);

  useEffect(() => {
    verifyInvite(token)
      .then((res) => {
        console.log(res.data);
        setUser({
          username: res.data.user.username,
          email: res.data.user.email,
          token: res.data.token,
        });
        setLoading(false);
      })
      .catch((err) => {
        setLoadingError(
          "An error occured while verifying accout. Please contact the administrator."
        );
        setLoading(false);
      });
  }, [token]);

  const handleVerifyInvite = () => {
    setError("");
    console.log(user, userInput);
    setSignUpLoading(true);
    completeResgistration({ ...user, ...userInput })
      .then((res) => {
        console.log(res.data);
        const role = res.data.user.role;
        setSignUpLoading(false);
        if (role === "admin") {
          window.location.href = "https://admin.eikova.photos/signin";
        } else {
          window.location.href = "https://contributor.eikova.photos/signin";
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setSignUpLoading(false);
      });
  };

  return {
    user,
    userInput,
    setUserInput,
    loading,
    error,
    signUpLoading,
    handleVerifyInvite,
    loadingError,
  };
};
export default useVerifyInvite;
