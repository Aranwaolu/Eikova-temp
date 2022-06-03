import jwt from "jwt-decode";
interface IUser {
  token: string;
  isLoggedIn: boolean;
  details: { name: string; role: string; email: string; sub: string };
}

const getUserFromLocal = () => {
  // Delete token after 23 hours. 82800000 = 23 hours in miliseconds
  if (
    JSON.parse(localStorage.getItem("eikova-tk") || "{}").timeStamp + 82800000 <
    Date.now()
  ) {
    localStorage.removeItem("eikova-tk");
  }
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
