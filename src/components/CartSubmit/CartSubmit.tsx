import Link from 'next/link'
import classes from './CartSubmit.module.css'
const CartSubmit = (props: { onClose: () => void }) => {
	return (
		<div className={classes.form}>
			<p className={classes.desc}>Do you want to login or buy as a guest?</p>

			<div className={classes.links}>
				<Link className='button login' href={'/login'}>
					Login
				</Link>
				<Link className='button signup' href={'/signup'}>
					Signup
				</Link>
				<button onClick={props.onClose} className='button default'>
					Continue as a guest
				</button>
			</div>
		</div>
	)
}

export default CartSubmit
