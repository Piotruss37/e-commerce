import Accordions from '@/components/Accordions/Accordions'
import classes from './faq.module.css'
const Faq = () => {
	return (
		<div className={classes.section}>
			<h1 className={classes.heading}>Frequently asked questions</h1>
			<Accordions></Accordions>
		</div>
	)
}

export default Faq
