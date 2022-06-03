import request from './index'

export const createPeople = async (name: string, type: string) => {
	return await request.post(`people/create`, { name, type })
}

export const createMeeting = async (name: string) => {
	return await request.post(`meeting/create`, { name })
}
