import Layout from '@/app/components/layout/Layout'
import { Promo } from '@/app/components/ui-components'
import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<div className={styles.bg}>
			<Layout title='Home' description='Made by andrxw66'>
				<Promo />
			</Layout>
		</div>
	)
}

export default Home
