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
		<Layout title='Home' description='Made by andrxw66'>
			<div className={styles.bg}>
				<Promo />
			</div>
			<Steps />
			<Destinations />
			<TravelStories />
		</Layout>
	)
}

export default Home
