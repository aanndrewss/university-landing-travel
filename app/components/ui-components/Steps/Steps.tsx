import { useMediaQuery } from '@react-hook/media-query'
import { FC } from 'react'
import { Htag } from '../../ui/Htag/Htag'
import Step1 from './icons/step1.svg'
import Step2 from './icons/step2.svg'
import Step3 from './icons/step3.svg'
import Step1Mobile from './icons/step1-mobile.svg'
import Step2Mobile from './icons/step2-mobile.svg'
import Step3Mobile from './icons/step3-mobile.svg'
import styles from './Steps.module.scss'

const steps = [
	{
		id: 1,
		icon: <Step1 />,
		mobileIcon: <Step1Mobile />,
		text: 'Tell us what you want to do'
	},
	{
		id: 2,
		icon: <Step2 />,
		mobileIcon: <Step2Mobile />,
		text: 'Share us preferable dates'
	},
	{
		id: 3,
		icon: <Step3 />,
		mobileIcon: <Step3Mobile />,
		text: 'We will give you recommendations'
	}
]

export const Steps: FC = () => {
	const matches = useMediaQuery('only screen and (min-width: 760px)')
	return (
		<section className={styles.steps}>
			<div className={styles.wrapper}>
				<Htag tag='h2'>3 STEPS TO THE PERFECT TRIP</Htag>
				<ul className={styles.stepsList}>
					{steps.map((s) => (
						<li key={s.id} className={styles.step}>
							<span className={styles.stepIcon}>
								{matches ? s.icon : s.mobileIcon}
							</span>
							<Htag tag='h4' className={styles.stepText}>
								{s.text}
							</Htag>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
