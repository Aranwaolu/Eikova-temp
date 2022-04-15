import { Text, Flex, VStack } from '@chakra-ui/react'
import Input from '../../user/atoms/input'
import Button from '../../user/atoms/button'
import LogoText from '../../user/molecules/LogoText'
import CustomDropdown from '../organisms/custom-dropdown'
import { useState } from 'react'

interface ItemHoverProp {
	hover: boolean
}

const defaultValueStyles = (hover: boolean) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
	position: 'relative',
	width: '100%',
	background: '#EAEAEA',
	borderRadius: '6px',
	height: '60px',
	color: '#686868',
	fontSize: '18px',
	padding: '0 20px',
})

const CompleteRegistration: React.FC = () => {
	const [hover, setHover] = useState(false)

	return (
		<Flex>
			<VStack minW='40%' px='78px' display='flex' alignItems='center' justifyContent='center' w='960px'>
				<form style={{ width: '435px' }}>
					<Text fontWeight='500' lineHeight='46.87px' fontSize='24px' mb='2px'>
						Welcome, Fowodee
					</Text>
					<Text color='#666666' fontSize='14px' mb='32px'>
						Fill the details to complete your registration
					</Text>
					<Input
						placeholder='Agba Fowodee'
						mb={'24px'}
						_placeholder={{ color: 'text.gray100', fontSize: '18px' }}
						fontSize='18px'
						isDisabled={true}
						height='60px'
					/>
					<Input
						placeholder='Fowospending@gmail.com'
						mb={'24px'}
						type='email'
						fontSize='18px'
						_placeholder={{ color: 'text.gray100', fontSize: '18px' }}
						isDisabled={true}
						height='60px'
					/>

					<CustomDropdown
						faIconColor='#AD7F33'
						containerStyle={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							alignItems: 'center',
							position: 'relative',
							width: '100%',
							marginBottom: '24px',
							cursor: 'pointer',
						}}
						defaultValue='Select department'
						defaultValueStyle={() => defaultValueStyles(hover)}
						dropdownIcon={true}
						dropdownMenu={['Online Publiciy', 'this', 'will', 'be', 'fetched']}
						dropdownMenuStyle={{
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
						}}
						dropdownMenuItemStyle={{
							width: '100%',
							cursor: 'pointer',
							padding: '8px 15px',
							textTransform: 'capitalize',
						}}
						handleCustomState={(e) => {
							console.log(e)
						}}
					/>

					<Input
						isRequired
						placeholder='Role e.g. HOD.'
						mb={'24px'}
						fontSize='18px'
						_placeholder={{ color: 'text.gray100', fontSize: '18px' }}
						height='60px'
					/>

					<Input
						isRequired
						placeholder='Create password'
						mb={'24px'}
						type='password'
						fontSize='18px'
						_placeholder={{ color: 'text.gray100', fontSize: '18px' }}
						height='60px'
					/>

					<Button variant='primary' type='submit' fontSize='18px' mb='10px' fontWeight='400'>
						Complete Registration
					</Button>

					<Text
						textAlign='center'
						fontWeight='400'
						fontSize='14.22px'
						line-height='19px'
						color='#A0A0A0'
					>
						A mail will be sent to this user for verification{' '}
					</Text>
				</form>
			</VStack>

			<VStack
				justifyContent='center'
				minH='100vh'
				w='100%'
				// background="linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/images/signin-bg.png), url(Login-Poster-series.jpg)"
				bgImage='url(/assets/images/signin-bg.png), url(Login-Poster-series.jpg)'
				bgSize='cover'
			>
				<LogoText big />
				<Text
					fontSize='24px'
					lineHeight='28.8px'
					color='white'
					maxW='420px'
					textAlign='center'
					mt='12px'
				>
					Pictures are memories that shoudn’t be lost.
				</Text>
			</VStack>
		</Flex>
	)
}

export default CompleteRegistration
