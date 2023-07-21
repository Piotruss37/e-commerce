'use client'
import { createContext } from 'react'
import { NewData } from '@/types'
const defaultContextValue = {
	updateUserData: (newData: NewData) => {},
	isLoggedIn: false,
	loginHandler: () => {},
	logoutHandler: () => {},
	userData: {
		idToken: '',
		expiresIn: '',
		localId: '',
		email: '',
	},
}

interface ContextType {
	isLoggedIn: boolean
	loginHandler: () => void
	logoutHandler: () => void
	userData: NewData
	updateUserData: (newData: NewData) => void
}

export const AuthContext = createContext<ContextType>(defaultContextValue)
