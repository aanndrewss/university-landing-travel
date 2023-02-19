import cn from 'clsx'
import { PProps } from './P.props'
import styles from './P.module.scss'

export const P = ({
	size = 'm',
	children,
	className,
	...props
}: PProps): JSX.Element => {
	return (
		<p className={cn(styles.p, className, styles[`${size}`])} {...props}>
			{children}
		</p>
	)
}
