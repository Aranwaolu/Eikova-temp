import { getUserFromLocal } from "../utils";
import { request } from "./index";
import { IUserInvite, IUserLogin } from "./types";

export const userSignIn = (reqBody: IUserLogin) => {
  return request.post(`auth/user/login`, reqBody);
};

export const adminSignIn = (reqBody: IUserLogin) => {
  return request.post(`auth/login`, reqBody);
};

export const addAdmin = (reqBody: IUserInvite) => {
  return request.post(
    `auth/invite`,
    { ...reqBody, role: "admin" },
    {
      headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
    }
  );
};

export const addContributor = (reqBody: IUserInvite) => {
  return request.post(
    `auth/invite`,
    { ...reqBody, role: "contributor" },
    {
      headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
    }
  );
};

export const addUser = (reqBody: IUserInvite) => {
  return request.post(
    `auth/invite`,
    { ...reqBody, role: "user" },
    {
      headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
    }
  );
};
