import request from './index'
import { ISignUp, IUserInvite, IUserLogin } from './types'

export const signIn = (reqBody: IUserLogin) => {
	return request.post(`auth/login`, reqBody)
}

export const addAdmin = (reqBody: IUserInvite) => {
	return request.post(`auth/invite`, { ...reqBody, role: 'admin' })
}

export const addContributor = (reqBody: IUserInvite) => {
	return request.post(`auth/invite`, { ...reqBody, role: 'contributor' })
}

export const addUser = (reqBody: IUserInvite) => {
	return request.post(`auth/user/invite`, { ...reqBody, role: 'user' })
}

export const resendInvite = (email: string) => {
	return request.post(`auth/resend-invite`, { email })
}

export const verifyInvite = (token: string) => {
	return request.post(`/auth/verify-invite?token=${token}`)
}

export const completeResgistration = (reqBody: ISignUp) => {
	return request.post(`/auth/signup`, reqBody)
}