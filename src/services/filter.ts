import request from "./index";

export const getAllPreachers = async () => {
  return await request.get(`people/search?q=minister&isType=true`);
};

export const getChoir = async () => {
    return await request.get(`people/search?q=choir&isType=true`);
  };
