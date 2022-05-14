import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../services/users'

interface Person {
	id: string
	username: string
	email: string
	department: string
	role: string
	status: string
}

const useSuperAdminDashboard = () => {
	const [people, setPeople] = useState<Person[]>([])
	const [checkedItems, setCheckedItems] = useState([false])
	const [role, setRole] = useState('')
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState('')
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)

	const { isOpen: isAddAdminOpen, onOpen: onAddAdminOpen, onClose: onAddAdminClose } = useDisclosure()
	const {
		isOpen: isAddContributorModalOpen,
		onOpen: onAddContributorModalOpen,
		onClose: onAddContributorModalClose,
	} = useDisclosure()
	const {
		isOpen: isAddUserModalOpen,
		onOpen: onAddUserModalOpen,
		onClose: onAddUserModalClose,
	} = useDisclosure()

	const {
		isOpen: isInviteSentModalOpen,
		onOpen: onInviteSentModalOpen,
		onClose: onInviteSentModalClose,
	} = useDisclosure()

	useEffect(() => {
		document.title = 'Admin Dashboad - Eikova'
		setLoading(true)
		getAllUsers(role, page)
			.then((res) => {
				setPeople(res.data.results)
				setTotalPages(res.data.totalPages)
				setLoading(false)
			})
			.catch((e) => {
				console.log(e)
				setError('An error occurred, please try again')
			})
	}, [role, page])

	const refetchUsers = () => {
		setLoading(true)
		console.log('here')
		getAllUsers(role, page)
			.then((res) => {
				setPeople(res.data.results)
				setTotalPages(res.data.totalPages)
				setLoading(false)
			})
			.catch((e) => {
				console.log(e)
				setError('An error occurred, please try again')
			})
	}

	useEffect(() => {
		setCheckedItems(Array(people.length).fill(false))
	}, [people])

	const handleAddPeopleItemClick = (e: string) => {
		if (e === 'admin') {
			onAddAdminOpen()
		} else if (e === 'user') {
			onAddUserModalOpen()
		} else if (e === 'contributor') {
			onAddContributorModalOpen()
		}
	}

	const handleClickAddCategory = () => {
		console.log('here')
	}

	const allChecked = checkedItems.every(Boolean)
	const isIndeterminate = checkedItems.some(Boolean) && !allChecked
	return {
		handleAddPeopleItemClick,
		onInviteSentModalOpen,
		allChecked,
		isIndeterminate,
		setCheckedItems,
		checkedItems,
		people,
		isAddAdminOpen,
		onAddAdminClose,
		isAddContributorModalOpen,
		onAddContributorModalClose,
		isInviteSentModalOpen,
		onInviteSentModalClose,
		isAddUserModalOpen,
		onAddUserModalClose,
		setRole,
		loading,
		error,
		setPage,
		totalPages,
		refetchUsers,
		handleClickAddCategory,
	}
}
export default useSuperAdminDashboard
