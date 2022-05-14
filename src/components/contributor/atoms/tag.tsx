import * as React from 'react'
import { Tag as ChakraTag } from '@chakra-ui/react'

interface ItagProps {
	tag: string
	onTagClick: () => void
}
const Tag: React.FunctionComponent<ItagProps> = ({ tag, onTagClick }) => {
	return (
		<ChakraTag
			w='auto'
			bgColor='text.secondary'
			display='flex'
			p='8px 12px'
			borderRadius='4px'
			css={{ svg: { marginLeft: '4px', cursor: 'pointer' } }}
		>
			{tag}
			<svg
				width='16'
				height='17'
				viewBox='0 0 16 17'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				onClick={onTagClick}
			>
				<path
					d='M8.0007 8.02561L11.496 11.5209M4.50537 11.5209L8.0007 8.02561L4.50537 11.5209ZM11.496 4.53027L8.00004 8.02561L11.496 4.53027ZM8.00004 8.02561L4.50537 4.53027L8.00004 8.02561Z'
					stroke='#8F8F8F'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</ChakraTag>
	)
}

export default Tag
