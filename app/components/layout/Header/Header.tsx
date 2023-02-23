import { Menu } from '@headlessui/react'
import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import { Button } from '../../ui'
import { DialogLogin } from './DialogLogin/DialogLogin'
import styles from './Header.module.scss'
import Logo from './logo.svg'
import MenuIcon from './menu.svg'

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
				<Button className={styles.logInBtn} onClick={() => setIsOpen(true)}>
					Login
				</Button>

				<Menu as='div' className={styles.menu}>
					<Menu.Button className={styles.menuBtn}>
						<MenuIcon />
					</Menu.Button>
					<Menu.Items className={styles.menuList}>
						{links.map((l) => (
							<Menu.Item key={l.id}>
								<a>{l.link}</a>
							</Menu.Item>
						))}
						<Menu.Item>
							<a>Account</a>
						</Menu.Item>
						<Menu.Item>
							<a>Socials</a>
						</Menu.Item>
					</Menu.Items>
				</Menu>
				<AnimatePresence>
					{isOpen && <DialogLogin isOpen={isOpen} setIsOpen={setIsOpen} />}
				</AnimatePresence>
			</div>
		</header>
	)
}

export default Header
