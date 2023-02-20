import { Dialog } from '@headlessui/react'
import styles from './DialogLogin.module.scss'
import { DialogProps } from './DialogLogin.props'

export const DialogLogin = ({ isOpen, setIsOpen }: DialogProps) => {
	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<div className={styles.bg}>
				<Dialog.Panel className={styles.popup}>
					<div>asdasda</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}
