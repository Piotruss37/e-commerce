'use client'
import Image from 'next/image'
import { useState } from 'react'
import classes from './Gallery.module.css'
const Gallery = (props: { images: string[] }) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const mainPicture = require(`../../../public/images/${props.images[0]}`)
	const secondPicture = require(`../../../public/images/${props.images[1]}`)
	const thirdPicture = require(`../../../public/images/${props.images[2]}`)

	const images = [mainPicture, secondPicture, thirdPicture]
	let currentPicture = images[currentSlide]

	const handleSlide = (slide: number) => {
		setCurrentSlide(slide)
	}

	return (
		<div className={classes.photos}>
			<div className={classes.mainImage}>
				<Image className={classes.image} src={currentPicture} alt='photo of the product'></Image>
			</div>

			<div className={classes.images}>
				<Image
					onClick={() => {
						handleSlide(0)
					}}
					className={classes.imageSmall}
					src={mainPicture}
					alt='photo of the product'
				></Image>
				<Image
					onClick={() => {
						handleSlide(1)
					}}
					className={classes.imageSmall}
					src={secondPicture}
					alt='photo of the product'
				></Image>
				<Image
					onClick={() => {
						handleSlide(2)
					}}
					className={classes.imageSmall}
					src={thirdPicture}
					alt='photo of the product'
				></Image>
			</div>
		</div>
	)
}

export default Gallery
