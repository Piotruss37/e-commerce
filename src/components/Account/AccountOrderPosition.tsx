const AccountOrderPosition = (props: { quantity: number; name: string; price: string }) => {
	const finalProductPrice = props.quantity * +props.price
	return (
		<>
			<div className={'order-item2'}>
				<p>
					{props.name} x{props.quantity}
				</p>
				<p>
					{props.price} PLN x{props.quantity} = {finalProductPrice} PLN
				</p>
			</div>
		</>
	)
}

export default AccountOrderPosition
