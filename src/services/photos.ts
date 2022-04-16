import { request } from "./index"

export const getAllPhotos = () => {
    request.get(`photos/?sortBy=latest`)
}