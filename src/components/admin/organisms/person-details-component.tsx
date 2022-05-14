import { Box, Checkbox, Flex, Text, useDisclosure, useToast } from '@chakra-ui/react'
import PersonOptionsDropdown from '../molecules/person-options-dropdown'
import StatusDropdown from '../molecules/status-dropdown'
import { deleteUser, updateUserStatus } from '../../../services/users'
import { resendInvite } from '../../../services/auth'
import ConfirmDeleteModal from '../modals/confrim-delete-modal'

interface PersonProps {
	person: Person
	isChecked?: boolean
	handleCheckbox: (e?: any, person?: Person) => void
	handleChange: () => void
}

interface Person {
	id: string
	username: string
	email: string
	department: string
	role: string
	status: string
}

const PersonDetailsComponents: React.FC<PersonProps> = ({
	person,
	isChecked,
	handleCheckbox,
	handleChange,
}) => {
	const toast = useToast()
	const {
		isOpen: isConfirmDeleteOpen,
		onOpen: onConfirmDeleteOpen,
		onClose: oneConfirmDeleteClose,
	} = useDisclosure()

	const profileIconNames = person.username?.split(' ') || [person.email[0]]

	const profileIconLetters =
		profileIconNames.length > 1 ? profileIconNames[0][0] + profileIconNames[1][0] : profileIconNames[0][0]
	const getRoleColor = (role: string) => {
		switch (role) {
			case 'admin':
				return '#FFCE7C'
			case 'superadmin':
				return '#FFCE7C'
			case 'contributor':
				return '#FFEED1'
			case 'user':
				return '#E3E3E3'
			default:
				return '#E3E3E3'
		}
	}

	const handleClickStatusDropdown = (event: string, userID: string) => {
		updateUserStatus(userID)
			.then((res: any) => {
				toast({
					title: `Status Updated - ${res.data.role}`,
					// description: "We've created your account for you.",
					status: 'success',
					duration: 2000,
					isClosable: false,
				})
				handleChange()
			})
			.catch((err) => console.log(err))
	}

	const handleClickPersonOptionsDropdown = (event: string, person: Person) => {
		if (event === 'resend invite') {
			resendInvite(person.email)
				.then((res) => {
					toast({
						title: `Invite resent successfully`,
						status: 'success',
						duration: 2000,
						isClosable: false,
					})
					handleChange()
				})
				.catch((err) => console.error(err))
		} else if (event === 'delete') {
			onConfirmDeleteOpen()
			// deleteUser(person.id)
			// 	.then((res) => {
			// 		toast({
			// 			title: `User Deleted`,
			// 			status: 'success',
			// 			duration: 2000,
			// 			isClosable: false,
			// 		})
			// 		handleChange()
			// 	})
			// 	.catch((err) => console.error(err))
		}
	}

	return (
		<>
			<Flex
				w='100%'
				margin='0'
				direction='row'
				justify='space-between'
				align='center'
				h='62px'
				color='#A0A0A0'
				p='23px 25px 23px 16px'
			>
				<Flex w='80px' direction='row' justify='space-between' align='center'>
					<Checkbox
						isChecked={isChecked}
						onChange={(e) => handleCheckbox(e)}
						_focus={{ outline: 'none' }}
					></Checkbox>
					<Box
						as='span'
						style={{
							height: '40px',
							width: '40px',
							backgroundColor: getRoleColor(person.role),
							borderRadius: '20px',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '18px',
							lineHeight: '23px',
							color: '#AD7F33',
						}}
					>
						{profileIconLetters}
					</Box>
				</Flex>
				<Text w='130px' textColor='#545454' fontWeight='700' textAlign='center'>
					{person.username ? person.username : '-'}
				</Text>
				<Text w='200px' textColor='#545454'>
					{person.email}
				</Text>
				<Text w='140px' textColor='#545454' textAlign='center'>
					{person.department ? person.department : '-'}
				</Text>
				<Text w='120px' textColor='#545454' textAlign='center'>
					{person.role ? person.role : '-'}
				</Text>

				<StatusDropdown
					status={person.status}
					handleCustomState={(e) => {
						handleClickStatusDropdown(e, person.id)
					}}
				/>

				<PersonOptionsDropdown
					status={person.status}
					handleCustomState={(e) => {
						handleClickPersonOptionsDropdown(e, person)
					}}
				/>
			</Flex>

			<ConfirmDeleteModal
				userID={person.id}
				isOpen={isConfirmDeleteOpen}
				onClose={oneConfirmDeleteClose}
				onSuccess={() => {
					oneConfirmDeleteClose()
				}}
			/>
		</>
	)
}

export default PersonDetailsComponents
