import { useState } from "react";
import { addContributor } from "../services/auth";

const useAddContributor = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInviteContrinutor = (onSuccess: () => void) => {
    if (!!email && !!username) {
      setLoading(true);
      setError("");
      addContributor({ email, username })
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
  return { setEmail, setUsername, loading, error, handleInviteContrinutor };
};
export default useAddContributor;
