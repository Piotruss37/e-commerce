'use client'
import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'
import classes from './cart.module.css'
import CartForm from '@/components/CartForm/CartForm'
const Cart = () => {
	const cartCtx = useContext(CartContext)
	let content

	if (cartCtx.productsQuantity === 0) {
		content = (
			<div className={classes.wrap}>
				<p>Your cart is empty</p>
			</div>
		)
	} else {
		content = (
			<div className='wrapping'>
				<CartForm></CartForm>
			</div>
		)
	}

	return (
		<div className='wrapper'>
			<h1 className='heading'>Cart</h1>
			{content}
		</div>
	)
}

export default Cart
