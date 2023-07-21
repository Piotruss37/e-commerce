'use client'
import Image from 'next/image'
import classes from './ProductItem.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { toast } from 'react-toastify'

const ProductItem = (props: { id: string; name: string; price: string; mainPic: string; morePictures: string[] }) => {
	const cartCtx = useContext(CartContext)
	const packageName = require(`../../../public/images/${props.mainPic}`)

	const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const product = {
			id: props.id,
			name: props.name,
			price: props.price,
			mainPic: props.mainPic,
			morePictures: [],
			quantity: 1,
		}
		cartCtx.addNewProductToCart(product)
		toast('Product added to cart!', {
			position: 'top-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		})
	}

	return (
		<Link href={`/products/${props.name}`} className={classes.product}>
			<Image
				style={{ objectFit: 'cover' }}
				alt='product picture'
				width={'250'}
				height={'250'}
				src={packageName}
			></Image>

			<p className={classes.heading}>{props.name}</p>

			<p className={classes.price}>{props.price} PLN</p>
			<button onClick={handleAddToCart} className={classes.button}>
				Add to cart
			</button>
		</Link>
	)
}

export default ProductItem
