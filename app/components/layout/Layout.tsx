import { FC } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import { ILayoutProps } from './Layout.props'
import Meta from './Meta/Meta'

const Layout: FC<ILayoutProps> = ({ children, title, description }) => {
	return (
		<>
			<Meta title={title} description={description} />
			<Header />
			<div className={styles.page}>
				<div className={styles.wrapper}>
					<main>{children}</main>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Layout
