import useInput from '@/hooks/use-input'
import classes from './CartData.module.css'
import { useState, useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'
import { CartContext } from '@/context/CartContext'
import { useRouter } from 'next/navigation'
import { DATABASE_LINK } from '@/constants'
import useHttp from '@/hooks/use-http'
const CartData = () => {
	const router = useRouter()
	const [hasBeenOrderPlaced, setHasBeenOrderPlaced] = useState(false)
	const authCtx = useContext(AuthContext)
	const cartCtx = useContext(CartContext)
	let formIsValid = false

	const { sendRequest } = useHttp()

	const {
		value: nameValue,
		inputIsInvalid: nameInputIsInvalid,
		valueChangeHandler: nameChangeHandler,
		valueBlurHandler: nameBlurHandler,
		valueIsValid: nameIsValid,
		setValueIsTouched: setNameIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 1
	})
	const {
		value: surnameValue,
		inputIsInvalid: surnameInputIsInvalid,
		valueChangeHandler: surnameChangeHandler,
		valueBlurHandler: surnameBlurHandler,
		valueIsValid: surnameIsValid,
		setValueIsTouched: setSurnameIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 1
	})
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
		value: telValue,
		inputIsInvalid: telInputIsInvalid,
		valueChangeHandler: telChangeHandler,
		valueBlurHandler: telBlurHandler,
		valueIsValid: telIsValid,
		setValueIsTouched: setTelIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 9
	})

	const {
		value: postalCodeValue,
		inputIsInvalid: postalCodeInputIsInvalid,
		valueChangeHandler: postalCodeChangeHandler,
		valueBlurHandler: postalCodeBlurHandler,
		valueIsValid: postalCodeIsValid,
		setValueIsTouched: setPostalCodeIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 3
	})
	const {
		value: cityValue,
		inputIsInvalid: cityInputIsInvalid,
		valueChangeHandler: cityChangeHandler,
		valueBlurHandler: cityBlurHandler,
		valueIsValid: cityIsValid,
		setValueIsTouched: setcityIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 2
	})
	const {
		value: streetValue,
		inputIsInvalid: streetInputIsInvalid,
		valueChangeHandler: streetChangeHandler,
		valueBlurHandler: streetBlurHandler,
		valueIsValid: streetIsValid,
		setValueIsTouched: setStreetIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 1
	})
	const {
		value: adressValue,
		inputIsInvalid: adressInputIsInvalid,
		valueChangeHandler: adressChangeHandler,
		valueBlurHandler: adressBlurHandler,
		valueIsValid: adressIsValid,
		setValueIsTouched: setAdressIsTouched,
	} = useInput((value: string) => {
		return value.trim().length >= 1
	})

	if (
		nameIsValid &&
		emailIsValid &&
		surnameIsValid &&
		telIsValid &&
		postalCodeIsValid &&
		cityIsValid &&
		streetIsValid &&
		adressIsValid
	) {
		formIsValid = true
	}

	const formSubmissionHandler = () => {
		setNameIsTouched(true)
		setSurnameIsTouched(true)
		setEmailIsTouched(true)
		setTelIsTouched(true)
		setPostalCodeIsTouched(true)
		setcityIsTouched(true)
		setStreetIsTouched(true)
		setAdressIsTouched(true)
		if (formIsValid) {
			if (authCtx.isLoggedIn) {
				const requestBody = JSON.stringify({
					localId: authCtx.userData.localId,
					email: authCtx.userData.email,
					cart: cartCtx.cart,
				})
				sendRequest(`${DATABASE_LINK}/${authCtx.userData.localId}.json`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: requestBody,
				})
			}
			setHasBeenOrderPlaced(true)
			setTimeout(() => {
				router.push('/')
				cartCtx.removeAllProducts()
			}, 2000)
		}
	}

	const invalidNameClasses = `${classes.input} ${nameInputIsInvalid ? classes.invalid : ''}`
	const invalidSurnameClasses = `${classes.input} ${surnameInputIsInvalid ? classes.invalid : ''}`
	const invalidEmailClasses = `${classes.input} ${emailInputIsInvalid ? classes.invalid : ''}`
	const invalidTelClasses = `${classes.input} ${telInputIsInvalid ? classes.invalid : ''}`
	const invalidPostalCodeClasses = `${classes.input} ${postalCodeInputIsInvalid ? classes.invalid : ''}`
	const invalidCityClasses = `${classes.input} ${cityInputIsInvalid ? classes.invalid : ''}`
	const invalidStreetClasses = `${classes.input} ${streetInputIsInvalid ? classes.invalid : ''}`
	const invalidAdressClasses = `${classes.input} ${adressInputIsInvalid ? classes.invalid : ''}`
	return (
		<>
			<div className={classes.data}>
				<div className={classes.row}>
					<div className={classes.item}>
						<label htmlFor='name' className={classes.label}>
							Name
						</label>
						<input
							id='name'
							onChange={nameChangeHandler}
							onBlur={nameBlurHandler}
							value={nameValue}
							className={invalidNameClasses}
							type='text'
						></input>
					</div>
					{nameInputIsInvalid && <p className={classes.error}>Provide a name</p>}
					<div className={classes.item}>
						<label htmlFor='surname' className={classes.label}>
							Surname
						</label>
						<input
							id='surname'
							onBlur={surnameBlurHandler}
							onChange={surnameChangeHandler}
							value={surnameValue}
							className={invalidSurnameClasses}
							type='text'
						></input>
					</div>
					{surnameInputIsInvalid && <p className={classes.error}>Provide a surname</p>}
					<div className={classes.item}>
						<label htmlFor='cartmail' className={classes.label}>
							E-mail adress
						</label>
						<input
							id='cartmail'
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							value={emailValue}
							className={invalidEmailClasses}
							type='email'
						></input>
					</div>
					{emailInputIsInvalid && <p className={classes.error}>Provide a valid e-mail</p>}
					<div className={classes.item}>
						<label htmlFor='phone' className={classes.label}>
							Phone number
						</label>
						<input
							id='phone'
							value={telValue}
							onChange={telChangeHandler}
							onBlur={telBlurHandler}
							className={invalidTelClasses}
							type='number'
						></input>
					</div>
					{telInputIsInvalid && <p className={classes.error}>Provide a valid phone number</p>}
				</div>
				<div className={classes.row}>
					<div className={classes.item}>
						<label htmlFor='postalCode' className={classes.label}>
							Postal code
						</label>
						<input
							id='postalCode'
							onChange={postalCodeChangeHandler}
							onBlur={postalCodeBlurHandler}
							value={postalCodeValue}
							className={invalidPostalCodeClasses}
							type='text'
						></input>
					</div>
					{postalCodeInputIsInvalid && <p className={classes.error}>Provide a valid postal code</p>}
					<div className={classes.item}>
						<label htmlFor='city' className={classes.label}>
							City
						</label>
						<input
							id='city'
							onChange={cityChangeHandler}
							onBlur={cityBlurHandler}
							value={cityValue}
							className={invalidCityClasses}
							type='text'
						></input>
					</div>
					{cityInputIsInvalid && <p className={classes.error}>Provide a city</p>}
					<div className={classes.item}>
						<label htmlFor='street' className={classes.label}>
							Street
						</label>
						<input
							id='street'
							onBlur={streetBlurHandler}
							onChange={streetChangeHandler}
							value={streetValue}
							className={invalidStreetClasses}
							type='text'
						></input>
					</div>
					{streetInputIsInvalid && <p className={classes.error}>Provide a street or leave - </p>}
					<div className={classes.item}>
						<label htmlFor='houseNumber' className={classes.label}>
							House number
						</label>
						<input
							id='houseNumber'
							onBlur={adressBlurHandler}
							onChange={adressChangeHandler}
							value={adressValue}
							className={invalidAdressClasses}
							type='text'
						></input>
					</div>
					{adressInputIsInvalid && <p className={classes.error}>Provide a house number</p>}
				</div>
			</div>
			<button onClick={formSubmissionHandler} className={classes.order}>
				Submit order
			</button>
			{hasBeenOrderPlaced && <span style={{ marginLeft: '10px' }}>Order has been placed, redirecting...</span>}
		</>
	)
}

export default CartData
