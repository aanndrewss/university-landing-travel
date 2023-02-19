import Layout from '@/app/components/layout/Layout'
import {
	Destinations,
	Promo,
	Steps,
	TravelStories
} from '@/app/components/ui-components'
import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<div className={styles.bg}>
			<Layout title='Travel Portal' description='Made by andrxw66'>
				<Promo />
				<Steps />
				<Destinations />
				<TravelStories />
			</Layout>
		</div>
	)
}

export default Home
