const Modal = (props: { onClick: () => void; children: React.ReactNode }) => {
	return (
		<div className='modal'>
			<div className='modal__backdrop' onClick={props.onClick}></div>
			<div className='modal__content'>{props.children}</div>
		</div>
	)
}

export default Modal
