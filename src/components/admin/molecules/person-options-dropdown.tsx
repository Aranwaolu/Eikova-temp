import { useState } from 'react'

import { Box, Icon } from '@chakra-ui/react'

import { useDetectClickOutside } from 'react-detect-click-outside'

interface IPersonOptionsDropdownProps {
	status: string
	handleCustomState: (e: any) => void
}

const dropdownMenu = ['resend invite', 'delete']

const PersonOptionsDropdown: React.FC<IPersonOptionsDropdownProps> = ({ status, handleCustomState }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const ref = useDetectClickOutside({
		onTriggered: () => setIsDropdownOpen(false),
	})

	return (
		<>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					position: 'relative',
				}}
				ref={ref}
			>
				<svg
					onClick={() => {
						setIsDropdownOpen(!isDropdownOpen)
					}}
					style={{
						fontSize: '15px',
						cursor: 'pointer',
					}}
					width='5'
					height='16'
					viewBox='0 0 5 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M2.40796 4C3.50796 4 4.40796 3.1 4.40796 2C4.40796 0.9 3.50796 0 2.40796 0C1.30796 0 0.407959 0.9 0.407959 2C0.407959 3.1 1.30796 4 2.40796 4ZM2.40796 6C1.30796 6 0.407959 6.9 0.407959 8C0.407959 9.1 1.30796 10 2.40796 10C3.50796 10 4.40796 9.1 4.40796 8C4.40796 6.9 3.50796 6 2.40796 6ZM2.40796 12C1.30796 12 0.407959 12.9 0.407959 14C0.407959 15.1 1.30796 16 2.40796 16C3.50796 16 4.40796 15.1 4.40796 14C4.40796 12.9 3.50796 12 2.40796 12Z'
						fill='#545454'
					/>
				</svg>

				{isDropdownOpen && (
					<Box
						style={{
							position: 'absolute',
							width: '140px',
							padding: '0 10px',
							right: '0',
							top: '20px',
							background: '#FFFFFF',
							boxShadow: '2px 4px 20px rgba(0, 0, 0, 0.15)',
							borderRadius: '0px 0px 6px 6px',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
							zIndex: '99',
							overflow: 'hidden',
						}}
					>
						{status !== 'active' &&
							dropdownMenu.map((item, index) => {
								return (
									<Box
										style={{
											width: '100%',
											textTransform: 'capitalize',
											cursor: 'pointer',
											padding: '6px 10px',
											color: item === 'delete' ? '#f5302a' : '#A0A0A0',
										}}
										borderBottom='1px solid #E8E8E8'
										_hover={{ background: 'aliceblue' }}
										_last={{ borderBottom: 'none' }}
										key={index}
										onClick={() => {
											setIsDropdownOpen(false)
											handleCustomState(item)
										}}
									>
										{item}
									</Box>
								)
							})}
					</Box>
				)}
			</Box>
		</>
	)
}

export default PersonOptionsDropdown
