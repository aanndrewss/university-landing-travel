import cn from 'clsx'
import styles from './Htag.module.scss'
import { HtagProps } from './Htag.props'

export const Htag = ({
	tag: Tag = 'h1',
	children,
	className
}: HtagProps): JSX.Element => {
	return (
		<Tag className={cn(styles.h, className, styles[`${Tag}`])}>{children}</Tag>
	)
}
