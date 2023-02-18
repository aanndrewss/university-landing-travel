import { FC } from 'react'
import { Button } from '../../ui'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.wrapper}>
				<img src='/images/logo.png' alt='logo' />
				<nav className={styles.headerNav}>
					<a className={styles.headerLink}>How It Works?</a>
					<a className={styles.headerLink}>Plan Your Trip</a>
					<a className={styles.headerLink}>Destinations</a>
					<a className={styles.headerLink}>Travel Stories</a>
				</nav>
				<Button>Login</Button>
			</div>
		</header>
	)
}

export default Header
