import { ProductItem } from '@/types'
import AccountOrderPosition from './AccountOrderPosition'

const AccountOrderItem = (props: { cart: ProductItem[] }) => {
	let content

	if (props.cart.length > 0) {
		content = props.cart.map(cartItem => {
			const key = Math.random()
			return <AccountOrderPosition key={key} name={cartItem.name} price={cartItem.price}></AccountOrderPosition>
		})
	} else {
		content = <p className='centered'>You dont have any orders</p>
	}

	return (
		<div className='order-item'>
			<p className='order-detail'>Order detail:</p>
			<div className='order-list-item'>{content}</div>
		</div>
	)
}

export default AccountOrderItem
