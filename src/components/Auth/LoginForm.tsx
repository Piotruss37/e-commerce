'use client'
import Link from 'next/link'
import classes from './LoginForm.module.css'
import useInput from '@/hooks/use-input'
import useHttp from '@/hooks/use-http'
import { LOGIN_ENDPOINT, SIGN_UP_ENDPOINT } from '@/constants'
import { useState, useEffect, useContext } from 'react'
import { toast } from 'react-toastify'
import { toastConfig } from '@/constants'
import { AuthContext } from '@/context/AuthContext'
import { NewData } from '@/types'
import { useRouter } from 'next/navigation'
const SignupForm = () => {
	const authCtx = useContext(AuthContext)
	const router = useRouter()
	let formIsValid = false
	const { isLoading, hasError, sendRequest, didSucceed } = useHttp()
	const [signupData, setSignupData] = useState<NewData>()
	const {
		value: emailValue,
		inputIsInvalid: emailInputIsInvalid,
		valueChangeHandler: emailChangeHandler,
		valueBlurHandler: emailBlurHandler,
		valueIsValid: emailIsValid,
		setValueIsTouched: setEmailIsTouched,
	} = useInput((value: string) => {
		return value.trim().includes('@')
	})
	const {
		value: passwordValue,
		inputIsInvalid: passwordInputIsInvalid,
		valueChangeHandler: passwordChangeHandler,
		valueBlurHandler: passwordBlurHandler,
		valueIsValid: passwordIsValid,
		setValueIsTouched: setPasswordIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 8
	})

	if (passwordIsValid && emailIsValid) {
		formIsValid = true
	}

	const handleSignup = () => {
		setEmailIsTouched(true)
		setPasswordIsTouched(true)
		if (formIsValid) {
			const userData = {
				email: emailValue,
				password: passwordValue,
				returnSecureToken: true,
			}
			sendRequest(
				LOGIN_ENDPOINT,
				{
					method: 'POST',
					body: JSON.stringify(userData),
					headers: { 'Content-Type': 'application/json' },
				},
				(data: NewData) => {
					const email = userData.email
					authCtx.updateUserData({
						...data,
						email,
					})
				}
			)
		}
	}

	useEffect(() => {
		const token = signupData?.idToken
		if (hasError) {
			toast.error(`${hasError}`, {
				...toastConfig,
				toastId: 'error',
				theme: 'light',
			})
		} else {
			toast.dismiss('error')
		}

		if (didSucceed) {
			toast.success('logged in successfully - redirecting...', {
				...toastConfig,
				toastId: 'success',
				theme: 'light',
			})
			authCtx.loginHandler()
			const expiration = new Date()
			expiration.setHours(expiration.getHours() + 1)

			localStorage.setItem('expiration', expiration.toISOString())
			localStorage.setItem('token', token!)
			router.push('/account')
		}
	}, [hasError, didSucceed, signupData?.idToken])

	const invalidEmailClasses = `${classes.input} ${emailInputIsInvalid ? classes.invalid : ''}`
	const invalidPasswordClasses = `${classes.input} ${passwordInputIsInvalid ? classes.invalid : ''}`

	return (
		<div className={classes.loginForm}>
			<div className={classes.item}>
				<label className={classes.label} htmlFor='email'>
					E-mail
				</label>
				<input
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					className={invalidEmailClasses}
					id='email'
					type='email'
				></input>
			</div>
			{emailInputIsInvalid && <p className={classes.error}>Provide a valid e-mail</p>}
			<div className={classes.item}>
				<label className={classes.label} htmlFor='password'>
					Password
				</label>
				<input
					onBlur={passwordBlurHandler}
					onChange={passwordChangeHandler}
					className={invalidPasswordClasses}
					id='password'
					type='password'
				></input>
			</div>
			{passwordInputIsInvalid && <p className={classes.error}>Password must be min 8 characters long</p>}
			<button onClick={handleSignup} className={classes.btn}>
				Login
			</button>
			<Link className={classes.signup} href={'/signup'}>
				You dont have an account? Sign up
			</Link>
		</div>
	)
}

export default SignupForm
