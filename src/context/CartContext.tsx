'use client'
import { ProductItem } from '@/types'
import { createContext } from 'react'

const defaultContextValue = {
	addNewProductToCart: (product: ProductItem) => {},
	removeAllProducts: () => {},
	updateQuantity: (id: string, quantity: number) => {},
	removeProduct: (id: string) => {},
	cart: [],
	productsQuantity: 0,
	totalAmount: 0,
}

interface CartContextType {
	addNewProductToCart: (product: ProductItem) => void
	removeAllProducts: () => void
	updateQuantity: (id: string, quantity: number) => void
	removeProduct: (id: string) => void
	cart: ProductItem[]
	productsQuantity: number
	totalAmount: number
}

export const CartContext = createContext<CartContextType>(defaultContextValue)
