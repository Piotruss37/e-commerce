'use client'
import Link from 'next/link'
import classes from './NavLinks.module.css'
import { usePathname } from 'next/navigation'
const NavLinks = () => {
	const path = usePathname()

	return (
		<div className={classes.navLinks}>
			<Link className={path === '/' ? classes.active : ''} href={'/'}>
				Home
			</Link>
			<Link className={path.startsWith('/products') ? classes.active : ''} href={'/products'}>
				Products
			</Link>
			<Link className={path === '/faq' ? classes.active : ''} href={'/faq'}>
				FAQ
			</Link>
			<Link href={'/account'} className={classes.mid}>
				Account
			</Link>
			<Link href={'/cart'} className={classes.mid}>
				Cart
			</Link>
		</div>
	)
}

export default NavLinks
