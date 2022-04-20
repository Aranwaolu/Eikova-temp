import { useState } from "react";
import { addUser } from "../services/auth";

const useAddUser = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInviteUser = (onSuccess: () => void) => {
    if (!!email && !!username) {
      setLoading(true);
      setError("");
      addUser({ email, username })
        .then((res) => {
          setLoading(false);
          if (res.status === 200) {
            onSuccess();
            setEmail("");
            setUsername("");
          }
        })
        .catch((err) => {
          console.log("error: ", err.response);
          setLoading(false);
          if (399 < err.response.status && err.response.status < 500) {
            setError(err.response.data.message);
          } else {
            setError("An error occured, please try again");
          }
        });
    } else {
      setError("Please add a username and email");
    }
  };
  return { setEmail, setUsername, loading, error, handleInviteUser, email, username };
};
export default useAddUser;
