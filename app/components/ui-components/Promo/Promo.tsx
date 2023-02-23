import { FC } from 'react'
import { Button } from '../../ui/Button/Button'
import { Htag } from '../../ui/Htag/Htag'
import styles from './Promo.module.scss'

export const Promo: FC = () => {
	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<Htag tag='h1' className={styles.titleBig}>
					Explore the beauty of the World
				</Htag>
				<Htag tag='h4' className={styles.title}>
					Receive personalized recommendations for countries, hotels, activities
					and more
				</Htag>
				<div className={styles.box}>
					<span className={styles.boxText}>What would you like to do?</span>
					<Button className={styles.boxBtn}>Start Planning</Button>
				</div>
			</div>
		</section>
	)
}
