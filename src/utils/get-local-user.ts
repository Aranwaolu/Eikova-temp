// import jwt from "jwt-decode";

// Work in progress
const getUserFromLocal = () => {
  const localObject = JSON.parse(localStorage.getItem("eikova-tk")|| "");
  interface IUser {
    token: string;
    isLoggedIn: boolean;
    details: { username: string; role: string; id: number };
  }

  const user: IUser = {
    token: localStorage.getItem("eikova-tk") || "",
    isLoggedIn: !!localStorage.getItem("eikova-tk"),
    details: {
      username: "",
      role: "",
      id: 0,
    },
    //   details: !localStorage.getItem("tyrannus-tk") ? {
    //     Username: "",
    //     Id: 0
    //   } : jwt(localStorage.getItem("tyrannus-tk") || "")
  };
  return { ...user };
};
export default getUserFromLocal;
