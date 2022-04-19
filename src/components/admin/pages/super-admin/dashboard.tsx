import AdminNav from '../../../contributor/organisms/admin-nav'
import {
	Box,
	Button as ChakraButton,
	Checkbox,
	Flex,
	Image,
	Img,
	Text,
	useDisclosure,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'

import PeopleColorCodes from '../../molecules/people-color-codes'
import PersonDetailsComponents from '../../organisms/person-details-component'
import AddAdminModal from '../../modals/add-admin-modal'
import InviteSentModal from '../../modals/invite-sent-modal'
import AddContributorModal from '../../modals/add-contributor-modal'

import axios from 'axios'
import PeopleNavBar from '../../molecules/people-nav-bar'
import AddPersonDropdown from '../../molecules/add-person-dropdown'

interface Person {
	id: string
	username: string
	email: string
	department: string
	role: string
	status: string
}

const Dashboard: React.FC = () => {
	const [people, setPeople] = useState<Person[]>([])
	const [checkedItems, setCheckedItems] = useState([false])

	const { isOpen: isAddAdminOpen, onOpen: onAddAdminOpen, onClose: onAddAdminClose } = useDisclosure()
	const {
		isOpen: isAddContributorModalOpen,
		onOpen: onAddContributorModalOpen,
		onClose: onAddContributorModalClose,
	} = useDisclosure()

	const {
		isOpen: isInviteSentModalOpen,
		onOpen: onInviteSentModalOpen,
		onClose: onInviteSentModalClose,
	} = useDisclosure()

	const getUsers = async () => {
		await axios
			.get('https://eikova.herokuapp.com/v1/users')
			.then((res) => setPeople(res.data.results))
			.catch((e) => console.log(e))
	}

	useEffect(() => {
		document.title = 'Superadmin Dashboad - Eikova'
		getUsers()
	}, [])

	useEffect(() => {
		setCheckedItems(Array(people.length).fill(false))
	}, [people])

	const handleAddPeopleItemClick = (e: string) => {
		if (e === 'admin') {
			onAddAdminOpen()
		} else if (e === 'user') {
			onInviteSentModalOpen()
		} else if (e === 'contributor') {
			onAddContributorModalOpen()
		}
	}

	const allChecked = checkedItems.every(Boolean)
	const isIndeterminate = checkedItems.some(Boolean) && !allChecked

	return (
		<>
			<AdminNav />

			<Flex
				px='100px'
				pt='62px'
				pb='174px'
				color='#A2A2A2'
				direction='column'
				justify='space-between'
				align='flex-start'
			>
				<Text fontSize='36px' lineHeight='47px' color='#A0A0A0'>
					Welcome!
				</Text>

				<Flex mt='30px' direction='row' justify='space-between' align='center'>
					<AddPersonDropdown handleCustomState={handleAddPeopleItemClick} />

					<ChakraButton
						display='flex'
						flexDirection='row'
						justifyContent='center'
						alignItems='center'
						p='15px 30px'
						borderRadius='5px'
						bgColor='#EAEAEA'
						fontWeight='500'
						fontSize='18px'
						lineHeight='23px'
						color='#262626'
						h='60px'
						onClick={onInviteSentModalOpen}
						_focus={{ outline: 'none' }}
					>
						<Image src='/assets/images/svg_icons/user_add.svg' mr='16px' />
						Add Category
					</ChakraButton>
				</Flex>

				<Text fontSize='24px' lineHeight='31px' color='#262626' mt='43px' mb='26px'>
					Your People
				</Text>

				<Flex w='100%' direction='row' justify='space-between' align='center'>
					<PeopleNavBar />

					<PeopleColorCodes />
				</Flex>

				<Flex w='100%' direction='column' justify='space-between' align='center' mt='31px'>
					<Flex
						w='100%'
						direction='row'
						justify='space-between'
						align='center'
						h='62px'
						bg='#E1E1E1'
						borderRadius='5px 5px 0 0'
						color='#A0A0A0'
						p='23px 40px 23px 30px'
						mb='8px'
					>
						<Checkbox
							w='80px'
							_focus={{ outline: 'none' }}
							isChecked={allChecked}
							isIndeterminate={isIndeterminate}
							onChange={(e) => setCheckedItems(checkedItems.map(() => e.target.checked))}
						></Checkbox>

						<Text w='130px' fontWeight='700'>
							Username
						</Text>
						<Text w='200px' fontWeight='700'>
							Email Address
						</Text>
						<Text w='140px' fontWeight='700'>
							Department
						</Text>
						<Text w='120px' fontWeight='700'>
							Role
						</Text>
						<Text w='140px' fontWeight='700'>
							Status
						</Text>

						<Img src='/assets/images/svg_icons/menu_icon.svg' _hover={{ cursor: 'pointer' }} />
					</Flex>

					<Flex
						w='100%'
						direction='column'
						justify='space-between'
						align='center'
						borderWidth='1px'
						borderColor='#E8E8E8'
						padding='0 15px'
					>
						{people &&
							people.length > 0 &&
							people.map((person, index) => (
								<Box
									w='100%'
									margin='0'
									borderBottom='1px solid #E8E8E8'
									_last={{ borderBottom: 'none' }}
									key={person.id}
								>
									<PersonDetailsComponents
										isChecked={checkedItems[index]}
										handleCheckbox={(e) => {
											setCheckedItems(
												checkedItems.map((item, idx) =>
													index === idx ? e.target.checked : item
												)
											)
										}}
										key={person.id}
										person={person}
									/>
								</Box>
							))}
					</Flex>
				</Flex>
			</Flex>

			<AddAdminModal isOpen={isAddAdminOpen} onClose={onAddAdminClose} />
			<AddContributorModal isOpen={isAddContributorModalOpen} onClose={onAddContributorModalClose} />
			<InviteSentModal isOpen={isInviteSentModalOpen} onClose={onInviteSentModalClose} />
		</>
	)
}

export default Dashboard
