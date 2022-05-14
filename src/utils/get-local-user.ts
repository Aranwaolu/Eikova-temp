import jwt from "jwt-decode";
interface IUser {
  token: string;
  isLoggedIn: boolean;
  details: { name: string; role: string; email: string; sub: string };
}

const getUserFromLocal = () => {
  const localObject = JSON.parse(localStorage.getItem("eikova-tk") || "{}");

  const user: IUser = {
    token: localObject.token,
    isLoggedIn: !!localObject.token,
    details: !localObject.token
      ? {
          name: "",
          role: "",
          email: "",
          sub: "",
        }
      : jwt(localObject.token),
  };
  return { ...user };
};
export default getUserFromLocal;
