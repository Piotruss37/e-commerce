'use client'
import useHttp from '@/hooks/use-http'
import { AuthContext } from './AuthContext'
import { useState, useEffect } from 'react'
import { NewData } from '@/types'
import { GET_USER_DATA_ENDPOINT } from '@/constants'
interface UserData {
	displayName: string
	photoUrl: string
	localId: string
}

function getTokenDuration() {
	const storedExpirationDate = localStorage.getItem('expiration')
	

	if (!storedExpirationDate) {
		return 0
	}
	const expirationDate = new Date(storedExpirationDate!)
	const now = new Date()
	const duration = expirationDate.getTime() - now.getTime()
	return duration
}
const retrieveStoredToken = () => {
	const token = localStorage.getItem('token')

	if (!token) {
		return null
	}

	let tokenDuration = getTokenDuration()
	if (tokenDuration < 0) {
		tokenDuration = 0
		return null
	}
	return token
}

const AuthContextProvider = (props: { children: React.ReactNode }) => {
	let duration = getTokenDuration()
	const defaultState = {
		idToken: retrieveStoredToken()!,
		expiresIn: duration.toString(),
		localId: '',
		email: '',
	}
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const { sendRequest: getUserData } = useHttp()

	const [userData, setUserData] = useState<NewData>(defaultState)
	const token = retrieveStoredToken()
	useEffect(() => {
		if (token) {
			setIsLoggedIn(true)
			const data = localStorage.getItem('data')
			setUserData(JSON.parse(data!))
		}
	}, [token, getUserData, userData.idToken])

	const loginHandler = () => {
		setIsLoggedIn(true)
	}

	const logoutHandler = () => {
		setIsLoggedIn(false)
		setUserData({
			idToken: '',
			expiresIn: '',
			localId: '',
			email: '',
		})
		localStorage.clear()
	}

	const updateUserData = (data: NewData) => {
		setUserData(data)
		localStorage.setItem('data', JSON.stringify(data))
	}

	const defaultValue = {
		loginHandler,
		logoutHandler,
		isLoggedIn,
		userData,
		updateUserData,
	}

	return <AuthContext.Provider value={defaultValue}>{props.children}</AuthContext.Provider>
}

export default AuthContextProvider
