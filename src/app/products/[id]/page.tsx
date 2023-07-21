'use client'
import { products } from '@/constants'
import classes from './ProductDetail.module.css'
import Gallery from '@/components/Gallery/Gallery'
import CartButtons from '@/components/CartButtons/CartButtons'
import { useContext, useState } from 'react'
import { CartContext } from '@/context/CartContext'
import { toast } from 'react-toastify'
const Product = ({ params }: { params: { id: string } }) => {
	const [quantity, setQuantity] = useState(1)
	const cartCtx = useContext(CartContext)
	const encodedString = params.id
	const decodedString = decodeURIComponent(encodedString.replace(/%20/g, ' ').toLowerCase())
	const productName = decodedString[0].toUpperCase() + decodedString.slice(1)

	const currentProduct = products.find(product => {
		return product.name === productName
	})
	const allImages = [currentProduct?.mainPic, ...currentProduct!.morePictures] as string[]

	const addToCartHandler = () => {
		const product = {
			...currentProduct!,
			quantity: quantity,
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

	const handleQuantity = (quantity: number) => {
		setQuantity(quantity)
	}

	return (
		<div className='wrapper'>
			<div className={classes.product}>
				<Gallery images={allImages}></Gallery>
				<div className={classes.info}>
					<h2 className={classes.name}>{currentProduct?.name}</h2>
					<p className={classes.price}>{currentProduct?.price} PLN</p>
					<CartButtons onChangeQuantity={handleQuantity}></CartButtons>
					<button onClick={addToCartHandler} className={classes.button}>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default Product
