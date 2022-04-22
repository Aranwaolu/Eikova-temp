import { getUserFromLocal } from "../utils";
import { request } from "./index";

export const getAllUsers = (role?: string) => {
  return request.get(`users${role && "?role=" + role}`, {
    headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
  });
};

export const updateUserStatus = (userID: string) => {
  return request.patch(`users/${userID}/status`)
}