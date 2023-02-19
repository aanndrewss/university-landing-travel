import { FC } from 'react'
import { Htag } from '../../ui/Htag/Htag'
import Step1 from './icons/step1.svg'
import Step2 from './icons/step2.svg'
import Step3 from './icons/step3.svg'
import styles from './Steps.module.scss'

const steps = [
	{
		id: 1,
		icon: <Step1 />,
		text: 'Tell us what you want to do'
	},
	{
		id: 2,
		icon: <Step2 />,
		text: 'Share us preferable dates'
	},
	{
		id: 3,
		icon: <Step3 />,
		text: 'We will give you recommendations'
	}
]

export const Steps: FC = () => {
	return (
		<section className={styles.wrapper}>
			<Htag tag='h2'>3 STEPS TO THE PERFECT TRIP</Htag>
			<div className={styles.steps}>
				{steps.map((s) => (
					<div key={s.id} className={styles.step}>
						<span className={styles.stepIcon}>{s.icon}</span>
						<Htag tag='h4' className={styles.stepText}>
							{s.text}
						</Htag>
					</div>
				))}
			</div>
		</section>
	)
}
