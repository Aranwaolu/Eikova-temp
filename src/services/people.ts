import request from "./index";

export const getAllPeople = () => {
  return request.get(`people`);
};
