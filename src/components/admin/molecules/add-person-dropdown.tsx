import { useState } from 'react'

import { Box, Image } from '@chakra-ui/react'

import { useDetectClickOutside } from 'react-detect-click-outside'

interface Props {
	handleCustomState: (e: any) => void
}

const containerStyle: {} = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'center',
	position: 'relative',
	width: '205px',
	marginRight: '24px',
}

interface itemHoverProps {
	hover: boolean
}

const defaultValueStyle: any = ({ hover }: itemHoverProps) => ({
	// check how this hover affects the rendering
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-start',
	alignItems: 'center',
	padding: '15px 30px',
	borderRadius: '5px',
	backgroundColor: hover ? '#E2E8F0' : '#FFEED1',
	fontWeight: '500',
	fontSize: '18px',
	lineHeight: '23px',
	color: '#262626',
	height: '60px',
	width: '100%',
	cursor: 'pointer',
})

const dropdownMenu = ['contributor', 'admin', 'user']

const dropdownMenuStyle: {} = {
	position: 'absolute',
	width: '100%',
	padding: '0 15px',
	left: '0',
	background: '#FFFFFF',
	boxShadow: '2px 4px 20px rgba(0, 0, 0, 0.15)',
	borderRadius: '0px 0px 6px 6px',
	marginTop: '65px',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	alignItems: 'flex-start',
	zIndex: '99',
	overflow: 'hidden',
}

const dropdownMenuItemStyle: {} = {
	width: '100%',
	cursor: 'pointer',
	padding: '8px 15px',
	textTransform: 'capitalize',
}

const AddPersonDropdown: React.FC<Props> = ({ handleCustomState }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [hover, setHover] = useState(false)

	const ref = useDetectClickOutside({ onTriggered: () => setIsDropdownOpen(false) })

	return (
		<>
			<Box style={containerStyle} ref={ref}>
				<Box
					onClick={() => {
						setIsDropdownOpen(!isDropdownOpen)
					}}
					style={defaultValueStyle({ hover })}
					onPointerOver={() => setHover(true)}
					onPointerOut={() => setHover(false)}
					_focus={{ outline: 'none' }}
				>
					<Image src='/assets/images/svg_icons/user_add.svg' style={{ marginRight: '15px' }} />
					Add As:
				</Box>

				{isDropdownOpen && (
					<Box style={dropdownMenuStyle}>
						{dropdownMenu.map((item, index) => {
							if (index !== dropdownMenu.length - 1) {
								return (
									<Box
										style={dropdownMenuItemStyle}
										borderBottom='1px solid #E8E8E8'
										_hover={{ background: 'aliceblue' }}
										key={index}
										onClick={() => {
											setIsDropdownOpen(false)
											handleCustomState(item)
										}}
									>
										{item}
									</Box>
								)
							} else {
								return (
									<Box
										style={dropdownMenuItemStyle}
										_hover={{ background: 'aliceblue' }}
										key={index}
										onClick={() => {
											setIsDropdownOpen(false)
											handleCustomState(item)
										}}
									>
										{item}
									</Box>
								)
							}
						})}
					</Box>
				)}
			</Box>
		</>
	)
}

export default AddPersonDropdown
