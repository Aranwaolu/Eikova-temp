import request from "./index";

export const getAllPreachers = async () =>
  request.get(`people/search?q=minister&isType=true`);

export const getChoir = () => request.get(`people/search?q=choir&isType=true`);

export const searchPhotos = (query: string, pageNumber: number) => {
  return request.get(`search?query=${query}&skip=${pageNumber}&limit=12`);
};
