import Head from 'next/head'
import { FC } from 'react'
import { MetaProps } from './Meta.props'

const Meta: FC<MetaProps> = ({ title, description }): JSX.Element => {
	return (
		<Head>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='description' content={description} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin='anonymous'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;500;700&display=swap'
				rel='stylesheet'
			/>
			<link rel='preconnect' href='https://fonts.googleapis.com' />
			<link
				rel='preconnect'
				href='https://fonts.gstatic.com'
				crossOrigin='anonymous'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Aleo:wght@300;400;700&display=swap'
				rel='stylesheet'
			/>
		</Head>
	)
}

export default Meta
