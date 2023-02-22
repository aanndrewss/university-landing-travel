import { Button, Htag, Input } from '@/app/components/ui'
import { Dialog } from '@headlessui/react'
import cn from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './DialogLogin.module.scss'
import { DialogProps } from './DialogLogin.props'
import FacebookLogo from './facebook-logo.svg'
import GoogleLogo from './google-logo.svg'

export const DialogLogin = ({ isOpen, setIsOpen }: DialogProps) => {
	const [isLogin, setIsLogin] = useState<boolean>(true)
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
							{isLogin ? 'Log in to your account' : 'Create account'}
						</Htag>
						{isLogin && (
							<>
								<button className={cn(styles.oauthBtn, styles.facebookBtn)}>
									<FacebookLogo /> Sign In with Facebook
								</button>
								<button className={cn(styles.oauthBtn, styles.googleBtn)}>
									<GoogleLogo /> Sign In with Google
								</button>
								<span className={styles.divider}>or</span>
							</>
						)}
						<form className={styles.form}>
							<div className={styles.labelWrapper}>
								<label className={styles.label}>E-mail</label>
								<Input />
							</div>
							<div className={styles.labelWrapper}>
								<label className={styles.label}>Password</label>
								<Input />
							</div>
							<Button className={styles.authBtn}>
								{isLogin ? 'Sign In' : 'Sign Up'}
							</Button>
						</form>
						<a className={styles.recoverLink}>Forgot your password?</a>
						<span className={styles.hr}></span>
						<div className={styles.link}>
							<span className={styles.linkText}>
								{isLogin
									? "Don't have an account?"
									: 'Already have an account?'}
							</span>
							<a
								onClick={() => setIsLogin(!isLogin)}
								className={styles.linkChangeForm}
							>
								{isLogin ? 'Register' : 'Log in'}
							</a>
						</div>
					</div>
				</Dialog.Panel>
			</motion.div>
		</Dialog>
	)
}
