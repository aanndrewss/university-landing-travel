import cn from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import styles from './Input.module.scss'
import { InputProps } from './Input.props'

export const Input = forwardRef(
	(
		{ className, error, ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>
	): JSX.Element => {
		return (
			<div className={cn(className, styles.inputWrapper)}>
				<input
					className={cn(styles.input, {
						[styles.error]: error
					})}
					ref={ref}
					{...props}
				/>
				{error && (
					<span role='alert' className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		)
	}
)
