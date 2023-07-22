'use client'
import { ProductItem } from '@/types'
import AccountOrderPosition from './AccountOrderPosition'

const AccountOrderItem = (props: { orderNumber: number; cart: ProductItem[] }) => {
	let totalPrice = 0
	const content = props.cart.map(cartItem => {
		const key = Math.random()
		const productPrice = +cartItem.price * cartItem.quantity
		totalPrice = totalPrice + productPrice
		return (
			<AccountOrderPosition
				key={key}
				quantity={cartItem.quantity}
				name={cartItem.name}
				price={cartItem.price}
			></AccountOrderPosition>
		)
	})

	return (
		<div className='order-item'>
			<p className='order-detail'>Order {props.orderNumber + 1} detail:</p>
			<div className='order-list-item'>{content}</div>
			<p className='order-total'>Total price: {totalPrice} PLN</p>
		</div>
	)
}

export default AccountOrderItem
