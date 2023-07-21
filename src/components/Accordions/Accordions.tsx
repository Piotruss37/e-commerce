import AccordionItem from './AccordionItem'
import classes from './Accordions.module.css'
import { accordionsData } from '@/constants'
const Accordions = () => {
	return (
		<div className={classes.accordions}>
			{accordionsData.map(item => {
				return <AccordionItem question={item.question} answer={item.answer} key={item.id}></AccordionItem>
			})}
		</div>
	)
}

export default Accordions
