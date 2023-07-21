import { CartContext } from '@/context/CartContext'
import CartItem from './CartItem'
import classes from './CartForm.module.css'
import { useContext, useState } from 'react'
import { AuthContext } from '@/context/AuthContext'
import CartSubmit from '../CartSubmit/CartSubmit'
import Modal from '../UI/Modal'
import CartData from '../CartSubmit/CartData'
const CartForm = () => {
	const [isModalShown, setModalIsShown] = useState(false)
	const [isSecondStep, setIsSecondStep] = useState(false)
	const cartCtx = useContext(CartContext)
	const authCtx = useContext(AuthContext)

	const handleRemoveAll = () => {
		cartCtx.removeAllProducts()
	}

	const handleCloseModal = () => {
		setModalIsShown(false)
	}

	const handleShowModal = () => {
		if (authCtx.isLoggedIn) {
			setIsSecondStep(true)
		} else {
			setModalIsShown(true)
		}
	}

	const showNextStep = () => {
		setIsSecondStep(true)
		setModalIsShown(false)
	}

	return (
		<>
			<div className={classes.info}>
				<p>Product</p>
				<p>Quantity</p>
			</div>
			{cartCtx.cart.map(item => {
				return (
					<CartItem
						quantity={item.quantity}
						price={item.price}
						picture={item.mainPic}
						name={item.name}
						key={item.id}
						id={item.id}
					></CartItem>
				)
			})}
			{!isSecondStep && (
				<div className={`${classes.info} ${classes.submit}`}>
					<button onClick={handleRemoveAll} className={classes.clear}>
						Clear cart
					</button>

					<button onClick={handleShowModal} className={classes.order}>
						Submit order
					</button>
				</div>
			)}
			{isModalShown && (
				<Modal onClick={handleCloseModal}>
					<CartSubmit onClose={showNextStep}></CartSubmit>
				</Modal>
			)}
			{isSecondStep && <CartData></CartData>}
		</>
	)
}

export default CartForm
