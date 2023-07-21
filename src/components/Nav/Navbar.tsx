'use client'
import Link from 'next/link'
import NavLinks from './NavLinks'
import classes from './Navbar.module.css'
import { IconCandle, IconShoppingCart, IconUserCircle } from '@tabler/icons-react'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

const NavBar = () => {
	const cartCtx = useContext(CartContext)
	return (
		<>
			<div className={classes.nav}>
				<div className={classes.headIcons}>
					<IconCandle size={50} className={classes.icon} strokeWidth={1.2}></IconCandle>

					<h1 className={classes.heading}>Soyami</h1>
				</div>

				<div className={classes.icons}>
					<Link href={'/account'}>
						<IconUserCircle size={50} strokeWidth={1}></IconUserCircle>
					</Link>
					<Link href={'/cart'} className={classes.cartButton}>
						<IconShoppingCart size={50} strokeWidth={1}></IconShoppingCart>
						<p className={classes.totalAmount}>{cartCtx.totalAmount} PLN</p>
					</Link>
				</div>
			</div>
			<NavLinks></NavLinks>
		</>
	)
}

export default NavBar
