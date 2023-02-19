import { FC } from 'react'
import styles from './Footer.module.scss'
import Instagram from './icons/instagram.svg'
import Twitter from './icons/twitter.svg'
import YouTube from './icons/youtube.svg'

const socials = [
	{
		id: 1,
		img: <Instagram />,
		label: 'Instagram'
	},
	{
		id: 2,
		img: <YouTube />,
		label: 'YouTube'
	},
	{
		id: 3,
		img: <Twitter />,
		label: 'Twitter'
	}
]

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.copyright}>
						All Rights Reserved © Travel Portal
					</div>
					<ul className={styles.socials}>
						{socials.map((s) => (
							<li key={s.id} className={styles.social}>
								{s.img}
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
