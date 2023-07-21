'use client'
import AccountOrders from '@/components/Account/AccountOrders'
import { AuthContext } from '@/context/AuthContext'
import Link from 'next/link'
import { useContext } from 'react'
const Account = () => {
	const authCtx = useContext(AuthContext)
	let content

	const handleLogout = () => {
		authCtx.logoutHandler()
	}

	if (!authCtx.isLoggedIn) {
		content = (
			<>
				<p style={{ fontSize: '2rem' }} className='heading'>
					You need to login to use this feature
				</p>
				<Link className='login-btn button' href={'/login'}>
					Login
				</Link>
			</>
		)
	} else {
		content = (
			<>
				<h1 className='heading'>Account</h1>
				<p className='centered'>Hello {authCtx.userData.email}!</p>
				<AccountOrders></AccountOrders>
				<button onClick={handleLogout} className='button login center'>
					Logout
				</button>
			</>
		)
	}

	return <div className='wrapper'>{content}</div>
}

export default Account
