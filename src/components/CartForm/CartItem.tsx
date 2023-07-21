import Image from 'next/image'
import classes from './CartItem.module.css'
import CartButtons from '../CartButtons/CartButtons'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import Link from 'next/link'
const CartItem = (props: { quantity: number; price: string; picture: string; name: string; id: string }) => {
	const cartCtx = useContext(CartContext)
	const image = require(`../../../public/images/${props.picture}`)
	const finalPrice = +props.price * props.quantity

	const handleQuantity = (value: number) => {
		cartCtx.updateQuantity(props.id, value)
	}

	const handleRemove = () => {
		cartCtx.removeProduct(props.id)
	}

	return (
		<div className={classes.single}>
			<div className={classes.item}>
				<Link href={`/products/${props.name}`}>
					<Image className={classes.image} priority src={image} alt='product picture'></Image>
				</Link>

				<div className={classes.item__description}>
					<Link href={`/products/${props.name}`}>
						<p className={classes.name}>{props.name}</p>
						{`${props.quantity} x ${props.price} PLN = ${finalPrice} PLN`}
					</Link>

					<p className={classes.remove} onClick={handleRemove}>
						Remove item
					</p>
				</div>
			</div>
			<div className={classes.quantity}>
				<CartButtons onChangeQuantity={handleQuantity} defaultValue={props.quantity}></CartButtons>
			</div>
		</div>
	)
}

export default CartItem
