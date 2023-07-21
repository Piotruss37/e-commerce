'use client'
import classes from './Accordions.module.css'
import { useState } from 'react'
const AccordionItem = (props: { question: string; answer: string }) => {
	const [isAnswerVisible, setIsAnswerVisible] = useState(false)

	const handleVisibility = () => {
		setIsAnswerVisible(prevState => {
			return !prevState
		})
	}

	const questionClasses = `${isAnswerVisible ? classes.opened : ''} ${classes.answer}`

	return (
		<button onClick={handleVisibility} className={classes.accordion}>
			<p className={classes.question}>
				<span>{isAnswerVisible ? '-' : '+'}</span>
				{props.question}
			</p>

			<div className={questionClasses}>
				<p>{props.answer}</p>
			</div>
		</button>
	)
}

export default AccordionItem
