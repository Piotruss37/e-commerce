import Link from 'next/link'
import classes from './Header.module.css'
const Header = () => {
	return (
		<div className={classes.header}>
			<h2>soy candles made with heart</h2>
			<Link href={'/products'} className={classes.button}>
				Check our products
			</Link>
		</div>
	)
}

export default Header
