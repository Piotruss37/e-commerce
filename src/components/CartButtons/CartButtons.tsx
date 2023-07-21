'use client'
import { type } from 'os'
import classes from './CartButtons.module.css'
import { useState, useEffect } from 'react'
const CartButtons = (props: { onChangeQuantity?: (quantity: number) => void; defaultValue?: number }) => {
	let defaultInputValue = props.defaultValue || 1

	const [currentValue, setCurrentValue] = useState(defaultInputValue)

	const handleIncrease = () => {
		setCurrentValue(currentValue => {
			return currentValue + 1
		})
	}

	const handleDecrease = () => {
		if (currentValue <= 1) {
			return
		} else {
			setCurrentValue(currentValue => {
				return currentValue - 1
			})
		}
	}

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(+e.target.value)
	}

	useEffect(() => {
		if (typeof props.onChangeQuantity === 'function') {
			props.onChangeQuantity(currentValue)
		}
	}, [currentValue])

	return (
		<div className={classes.quantity}>
			<button onClick={handleDecrease} className={classes.button}>
				-
			</button>
			<input
				onChange={changeHandler}
				value={currentValue}
				className={classes.input}
				placeholder='1'
				type='number'
				min={1}
			></input>
			<button onClick={handleIncrease} className={classes.button}>
				+
			</button>
		</div>
	)
}

export default CartButtons
