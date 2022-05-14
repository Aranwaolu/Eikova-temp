import { useState } from 'react'
import { deleteUser } from '../services/users'

const useConfirmDelete = () => {
	const [userID, setUserID] = useState('')
	const [loading, setLoading] = useState(false)

	const handleDeleteUser = (onSuccess: () => void) => {
		if (!!userID) {
			setLoading(true)
			deleteUser(userID)
				.then((res) => {
					setLoading(false)
					if (res.status === 200) {
						onSuccess()
						setUserID('')
					}
				})
				.catch((err) => {
					console.log('error: ', err.response)
					setLoading(false)
				})
		}
	}
	return { setUserID, loading, handleDeleteUser, userID }
}
export default useConfirmDelete
