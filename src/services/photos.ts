import request from './index'

export const getAllPhotos = (page: number) => {
	return request.get(`photos/?sortBy=latest&page=${page}`)
}

export const searchPhotos = (query: string) => {
	return request.get(`/photos/search?query=${query}`)
}
