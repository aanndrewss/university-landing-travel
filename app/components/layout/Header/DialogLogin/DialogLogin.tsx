import { Htag, Input } from '@/app/components/ui'
import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion'
import styles from './DialogLogin.module.scss'
import { DialogProps } from './DialogLogin.props'

export const DialogLogin = ({ isOpen, setIsOpen }: DialogProps) => {
	function closeModal() {
		setIsOpen(false)
	}

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1
		},
		exit: {
			opacity: 0
		}
	}

	return (
		<Dialog open={isOpen} onClose={closeModal}>
			<motion.div
				variants={container}
				initial='hidden'
				animate='show'
				exit='exit'
				className={styles.bg}
			>
				<Dialog.Panel className={styles.popup}>
					<div className={styles.popupWrapper}>
						<Htag tag='h3' className={styles.heading}>
							Log in to your account
						</Htag>
						<Input />
						<Input />
					</div>
				</Dialog.Panel>
			</motion.div>
		</Dialog>
	)
}
