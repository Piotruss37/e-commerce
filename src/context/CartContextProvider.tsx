'use client'
import { ProductItem } from '@/types'
import { CartContext } from './CartContext'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const CartContextProvider = (props: { children: React.ReactNode }) => {
	let cartSt
	if (typeof window !== 'undefined') {
		cartSt = localStorage.getItem('cart')
	}
	const cartFromStorage = JSON.parse(cartSt!)
	const [cart, setCart] = useState<ProductItem[]>(cartFromStorage)
	let totalAmount = 0

	let productsQuantity = 0

	if (typeof window !== 'undefined') {
		if (cart) {
			cart.forEach(product => {
				productsQuantity += product.quantity
			})

			cart.forEach(product => {
				const { price, quantity } = product
				totalAmount += +price * quantity
			})
		} else {
			localStorage.setItem('cart', JSON.stringify([]))
		}
	}

	const removeAllProducts = () => {
		setCart([])
	}

	const removeProduct = (id: string) => {
		setCart(prevCart => {
			const cart = [...prevCart]
			const updatedCart = cart.filter(item => item.id !== id)
			return [...updatedCart]
		})
		toast('Product removed from cart', {
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

	const updateQuantity = (id: string, quantity: number) => {
		setCart(prevCart => {
			const cart = [...prevCart]
			const itemInCart = cart.find(item => item.id === id)
			const indexOfElementToDelete = cart.indexOf(itemInCart!)
			cart[indexOfElementToDelete].quantity = quantity

			return [...cart]
		})
	}

	const addNewProductToCart = (product: ProductItem) => {
		let isItemInCart
		if (cart) {
			isItemInCart = cart.find(item => item.id === product.id)
		} else {
			setCart([])
		}

		if (isItemInCart) {
			const currentCart: ProductItem[] = [...cart]
			const indexOfElement = currentCart.indexOf(isItemInCart!)
			currentCart.splice(indexOfElement, 1)
			isItemInCart.quantity = isItemInCart.quantity + product.quantity
			setCart([...currentCart, isItemInCart])
		} else {
			setCart(prevCart => {
				return [...prevCart, product]
			})
		}
	}

	const defaultContextValue = {
		removeAllProducts,
		addNewProductToCart,
		cart,
		totalAmount,
		productsQuantity,
		updateQuantity,
		removeProduct,
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return <CartContext.Provider value={defaultContextValue}>{props.children}</CartContext.Provider>
}

export default CartContextProvider
