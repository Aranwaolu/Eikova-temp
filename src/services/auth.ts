import { request } from "./index";
import { IUserLogin } from "./types";

export const userSignIn = (reqBody: IUserLogin) => {
  return request.post(`auth/user/login`, reqBody);
};


export const adminSignIn = (reqBody: IUserLogin) => {
  return request.post(`auth/login`, reqBody);
};