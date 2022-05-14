import {
	Button as ChakraButton,
	Flex,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Spinner,
	Text,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { deleteUser } from '../../../services/users'
import { useConfirmDelete } from '../../../hooks'

interface ModalProps {
	userID: string
	isOpen: boolean
	onClose: () => void
	onSuccess: () => void
}

const ConfirmDeleteModal: React.FC<ModalProps> = ({ userID, isOpen, onClose, onSuccess }) => {
	// const { setUserID, loading, handleDeleteUser } = useConfirmDelete()
	const [loading, setLoading] = useState(false)

	const toast = useToast()

	const handleDelete = () => {
		setLoading(true)
		deleteUser(userID)
			.then((res) => {
				setLoading(false)
				if (res.status === 200) {
					onSuccess()
					toast({
						title: `Deleted User Successfully!`,
						status: 'success',
						duration: 2000,
						isClosable: false,
					})
				}
			})
			.catch((err) => {
				console.log('error: ', err.response)
				setLoading(false)
			})
	}

	return (
		<>
			<Modal
				// preserveScrollBarGap
				blockScrollOnMount={false}
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				motionPreset='slideInBottom'
				size='xl'
			>
				<ModalOverlay background='rgba(196, 196, 196, 0.65)' backdropFilter='blur(4px)' />
				<ModalContent
					display='flex'
					flexDirection='column'
					justifyContent='space-between'
					alignItems='center'
					padding='0'
				>
					<ModalCloseButton _focus={{ outline: 'none' }} />
					<ModalBody
						display='flex'
						flexDirection='column'
						justifyContent='center'
						alignItems='center'
						padding='0'
						margin='68px 0'
					>
						<svg
							width='30'
							height='34'
							viewBox='0 0 30 34'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							style={{ marginBottom: '10px' }}
						>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M28.8119 5.73844C29.4602 5.73844 30 6.27677 30 6.96176V7.59509C30 8.26342 29.4602 8.81841 28.8119 8.81841H1.18976C0.539767 8.81841 0 8.26342 0 7.59509V6.96176C0 6.27677 0.539767 5.73844 1.18976 5.73844H6.04928C7.03642 5.73844 7.8955 5.03678 8.11757 4.04679L8.37206 2.91014C8.76756 1.36182 10.0692 0.333496 11.5588 0.333496H18.4412C19.9146 0.333496 21.2308 1.36182 21.6117 2.82847L21.8841 4.04513C22.1045 5.03678 22.9636 5.73844 23.9523 5.73844H28.8119ZM26.343 28.8902C26.8504 24.1619 27.7387 12.9287 27.7387 12.8154C27.7711 12.472 27.6592 12.147 27.4372 11.8854C27.1989 11.6404 26.8974 11.4954 26.5651 11.4954H3.44754C3.11363 11.4954 2.79593 11.6404 2.57548 11.8854C2.35179 12.147 2.24157 12.472 2.25778 12.8154C2.26076 12.8362 2.29263 13.2319 2.34592 13.8934C2.58264 16.8321 3.24195 25.0171 3.66798 28.8902C3.96947 31.7435 5.84164 33.5368 8.55344 33.6018C10.646 33.6502 12.8019 33.6668 15.0063 33.6668C17.0827 33.6668 19.1915 33.6502 21.349 33.6018C24.1548 33.5535 26.0253 31.7918 26.343 28.8902Z'
								fill='#130F26'
							/>
						</svg>

						<Text
							fontWeight='700'
							fontSize='20px'
							lineHeight='24px'
							color='#464255'
							mb='24px'
							align='center'
						>
							Delete User?
						</Text>

						<Text
							fontWeight='400'
							w='340px'
							fontSize='18px'
							lineHeight='23px'
							color='#A3A3A3'
							align='center'
						>
							Are you sure you want to delete{' '}
							<span style={{ fontWeight: 700 }}>“Seun -Oluwseun@gmail.com”?</span>
							<br /> You can’t undo this action.
						</Text>

						<Flex direction='row' mt='30px'>
							<ChakraButton
								display='flex'
								gap='20px'
								justifyContent='center'
								alignItems='center'
								borderRadius='5px'
								bgColor='#EAEAEA'
								fontWeight='500'
								fontSize='18px'
								lineHeight='23px'
								color='#262626'
								h='53px'
								w='196px'
								p='15px 30px'
								mr='24px'
								_focus={{ outline: 'none' }}
								type='submit'
								onClick={(e) => {
									e.preventDefault()
									console.log('no delete', userID)
								}}
							>
								No, Keep User
							</ChakraButton>

							<ChakraButton
								display='flex'
								gap='20px'
								justifyContent='center'
								alignItems='center'
								borderRadius='5px'
								bgColor='#E12D3A'
								fontWeight='500'
								fontSize='18px'
								lineHeight='23px'
								color='#FFFFFF'
								h='53px'
								w='196px'
								p='15px 30px'
								_focus={{ outline: 'none' }}
								_hover={{ background: '#E12D3A' }}
								type='submit'
								onClick={(e) => {
									e.preventDefault()
									// setUserID(userID)
									// handleDeleteUser(onSuccess)
									handleDelete()
								}}
							>
								{loading ? 'Deleting User' : 'Yes, Delete User'}
								{loading && <Spinner />}
							</ChakraButton>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default ConfirmDeleteModal
