import request from './index'

export const getAllUsers = (role?: string, page?: number) => {
	if (role && page) {
		return request.get(`users${role && '?role=' + role}${page && '&page=' + page}`)
	}

	return request.get(`users${page && '?page=' + page}`)
}

export const updateUserStatus = (userID: string) => {
	return request.patch(`users/${userID}/status`, {})
}

export const deleteUser = (userID: string) => {
	return request.patch(`users/delete/${userID}`, {})
}
