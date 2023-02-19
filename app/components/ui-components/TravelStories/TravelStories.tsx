import { FC } from 'react'
import { P } from '../../ui'
import { Htag } from '../../ui/Htag/Htag'
import styles from './TravelStories.module.scss'

const stories = [
	{
		id: 1,
		title: '10 Photos of Attractive Thailand',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		img: '/images/story1.png'
	},
	{
		id: 2,
		title: 'Canyonlands National Park, Utah',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		img: '/images/story2.png'
	},
	{
		id: 3,
		title: 'I left my heart in the Mountains!',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		img: '/images/story3.png'
	},
	{
		id: 4,
		title: 'The Longest journey in my life!',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		img: '/images/story4.png'
	}
]

export const TravelStories: FC = () => {
	return (
		<>
			<Htag tag='h2' className={styles.htag}>
				TRAVEL STORIES
			</Htag>
			<section className={styles.stories}>
				<div className={styles.bgColor}>
					<div className={styles.wrapper}>
						<ul className={styles.storiesList}>
							{stories.map((s) => (
								<li key={s.id} className={styles.storyItem}>
									<img className={styles.storyImg} src={s.img} alt={s.title} />
									<div className={styles.storyDesc}>
										<Htag tag='h3'>{s.title}</Htag>
										<P>{s.description}</P>
										<a className={styles.storyLink}>Read more</a>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
