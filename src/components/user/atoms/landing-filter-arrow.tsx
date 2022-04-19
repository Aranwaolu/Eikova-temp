import * as React from 'react'

const LandingFilterNext: React.FunctionComponent = () => {
	return (
		<svg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<g filter='url(#filter0_d_232_959)'>
				<circle cx='32' cy='32' r='19' fill='white' />
			</g>
			<path
				d='M26 32H38'
				stroke='#7B4B36'
				strokeWidth='1.71429'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M32 26L38 32L32 38'
				stroke='#7B4B36'
				strokeWidth='1.71429'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<defs>
				<filter
					id='filter0_d_232_959'
					x='0.785715'
					y='0.785715'
					width='62.4286'
					height='62.4286'
					filterUnits='userSpaceOnUse'
					color-interpolation-filters='sRGB'
				>
					<feFlood flood-opacity='0' result='BackgroundImageFix' />
					<feColorMatrix
						in='SourceAlpha'
						type='matrix'
						values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
						result='hardAlpha'
					/>
					<feOffset />
					<feGaussianBlur stdDeviation='6.10714' />
					<feComposite in2='hardAlpha' operator='out' />
					<feColorMatrix
						type='matrix'
						values='0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0 0.5125 0 0 0 0.45 0'
					/>
					<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_232_959' />
					<feBlend
						mode='normal'
						in='SourceGraphic'
						in2='effect1_dropShadow_232_959'
						result='shape'
					/>
				</filter>
			</defs>
		</svg>
	)
}

export default LandingFilterNext
