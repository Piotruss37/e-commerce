export interface ProductItem {
	id: string
	name: string
	price: string
	mainPic: string
	morePictures: string[]
	quantity: number
}


export interface NewData {
	idToken: string
	expiresIn: string
	localId: string
	email:string
}
