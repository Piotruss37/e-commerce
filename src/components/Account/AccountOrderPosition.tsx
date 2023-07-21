const AccountOrderPosition = (props: { name: string; price: string }) => {
	return (
		<div className={'order-item2'}>
			<p>{props.name}</p>
			<p>{props.price} PLN</p>
		</div>
	)
}

export default AccountOrderPosition
