import { getUserFromLocal } from '../utils'
import { request } from './index'

export const getAllUsers = (role?: string, page?: number) => {
	if (role && page) {
		return request.get(`users${role && '?role=' + role}${page && '&page=' + page}`, {
			headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
		})
	}

	return request.get(`users${page && '?page=' + page}`, {
		headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
	})
}

export const updateUserStatus = (userID: string) => {
	return request.patch(
		`users/${userID}/status`,
		{},
		{
			headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
		}
	)
}

export const deleteUser = (userID: string) => {
	return request.patch(
		`users/delete/${userID}`,
		{},
		{
			headers: { Authorization: `Bearer ${getUserFromLocal().token}` },
		}
	)
}
