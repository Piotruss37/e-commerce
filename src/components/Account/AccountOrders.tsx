'use client'
import { AuthContext } from '@/context/AuthContext'
import classes from './AccountOrders.module.css'
import { useContext, useState, useEffect } from 'react'
import { NewData, ProductItem } from '@/types'
import useHttp from '@/hooks/use-http'
import { DATABASE_LINK } from '@/constants'
import AccountOrderItem from './AccountOrderItem'

interface Data {
	[key: string]: DataDb
}

interface DataDb {
	email: string
	localId: string
	cart: ProductItem[]
}

const AccountOrders = () => {
	const [data, setData] = useState<DataDb[]>([])
	const authCtx = useContext(AuthContext)
	const { sendRequest } = useHttp()
	const databaseUrl = `${DATABASE_LINK}${authCtx.userData.localId}.json`

	useEffect(() => {
		sendRequest(databaseUrl, {}, (dataFromDatabase: Data) => {
			const transformedData = Object.keys(dataFromDatabase).map(key => {
				setData(prevData => {
					return [...prevData, dataFromDatabase[key]]
				})
			})
		})
	}, [databaseUrl, sendRequest])

	const carts = data.map(order => order.cart)

	return (
		<div className='orders'>
			{carts.map(cart => {
				const key = Math.random().toString()
                return (
                    <AccountOrderItem key={key} cart={cart}></AccountOrderItem>
                )
			})}
		</div>
	)
}

export default AccountOrders
