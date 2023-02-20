import { FC, useState } from 'react'
import { Button } from '../../ui'
import { DialogLogin } from './DialogLogin/DialogLogin'
import styles from './Header.module.scss'
import Logo from './logo.svg'

const links = [
	{
		id: 1,
		link: 'How It Works?'
	},
	{
		id: 2,
		link: 'Plan Your Trip'
	},
	{
		id: 3,
		link: 'Destinations'
	},
	{
		id: 4,
		link: 'Travel Stories'
	}
]

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Logo />
					<span className={styles.logoText}>Travel Portal</span>
				</div>
				<nav className={styles.headerNav}>
					{links.map((l) => (
						<a key={l.id} className={styles.headerLink}>
							{l.link}
						</a>
					))}
				</nav>
				<Button onClick={() => setIsOpen(true)}>Login</Button>
				{isOpen && <DialogLogin isOpen={isOpen} setIsOpen={setIsOpen} />}
			</div>
		</header>
	)
}

export default Header
