import { useState } from 'react'
import { Checkbox, Flex, Img, Text } from '@chakra-ui/react'
import StatusDropdown from '../molecules/status-dropdown'

interface PersonProps {
	person: Person
	isChecked?: boolean
	handleCheckbox: (e?: any, person?: Person) => void
}

interface Person {
	username: string
	email: string
	department: string
	role: string
	status: string
}

const profileIconLettersStyle = (enabled: boolean) => ({
	height: '40px',
	width: '40px',
	backgroundColor: enabled ? '#FFEED1' : '#f4f4f4',
	borderRadius: '20px',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '18px',
	lineHeight: '23px',
	color: '#AD7F33',
})

// const handleCheckbox = (e: any, person?: Person) => {
// 	console.log(person)
// }

const PersonDetailsComponents: React.FC<PersonProps> = ({ person, isChecked, handleCheckbox }) => {
	// const [checkboxValue, setCheckboxValue] = useState(false)

	// let profileIconNames = person.username.split(' ')
	let profileIconNames = 'Eo I'.split(' ')
	let profileIconLetters = profileIconNames[0][0] + profileIconNames[1][0]

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
					<span
						style={{
							height: '40px',
							width: '40px',
							backgroundColor: person.status === 'active' ? '#FFEED1' : '#f4f4f4',
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
					</span>
				</Flex>
				<Text w='130px'>{person.username}</Text>
				<Text w='200px'>{person.email}</Text>
				<Text w='140px'>{person.department}</Text>
				<Text w='120px'>{person.role}</Text>

				<StatusDropdown
					status={person.status || 'default'}
					handleCustomState={(e) => {
						console.log(e)
					}}
				/>

				<Img src='/assets/images/svg_icons/menu_icon.svg' _hover={{ cursor: 'pointer' }} />
			</Flex>
		</>
	)
}

export default PersonDetailsComponents
