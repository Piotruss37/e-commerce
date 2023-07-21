import { ToastOptions } from 'react-toastify'
export const accordionsData = [
	{
		id: 1,
		question: 'What causes the white marks on my soy candles?',
		answer:
			'Occasionally, white marks may appear on soy candles due to the nature of the soy wax. The tiny, white looking crystals on the tops and sides of jars are called frosting and are very similar to the frosted look on chocolate. This is a natural characteristic of soy wax and should not be treated as a flaw. It does not affect the quality or burn of the candle.',
	},
	{
		id: 2,
		question: 'Where do the fragrances come from?',
		answer:
			'We have specially sourced our fragrances made of essential oils from leading Australian & European perfumers',
	},
	{
		id: 3,
		question: 'What type of wicks are used in candles?',
		answer: 'Our soy candles wicks are made from 100% lead-free cotton.',
	},
	{ id: 4, question: 'How long does shipping take?', answer: 'Shipping takes 3 to 5 business days.' },
]

export const products = [
	{
		id: 'product1',
		price: '119',
		name: 'Brown soy candle',
		mainPic: 'brown-candle.jpg',
		morePictures: ['brown-candle2.jpg', 'brown-candle4.jpg'],
	},
	{
		id: 'product2',
		name: 'Green soy candle',
		price: '119',
		mainPic: 'green-candle.jpg',
		morePictures: ['green-candle2.jpg', 'green-candle3.jpg'],
	},

	{
		id: 'product3',
		name: 'Soy candle 180 ml',
		price: '59',
		mainPic: 'soya180.jpg',
		morePictures: ['soya180-2.jpg', 'soya180-3.jpg'],
	},
	{
		id: 'product4',
		name: 'Soy candle 120 ml',
		price: '39',
		mainPic: 'soya120.jpg',
		morePictures: ['soya120-1.jpeg', 'soya120-2.jpg'],
	},
	{
		id: 'product5',
		name: 'Ball soy candle',
		price: '99',
		mainPic: 'ball1.jpeg',
		morePictures: ['ball2.jpeg', 'ball3.jpeg'],
	},
	{
		id: 'product6',
		name: 'Christmas tree soy candle',
		price: '70',
		mainPic: 'tree1.jpeg',
		morePictures: ['tree2.jpeg', 'tree3.jpg'],
	},
	{
		id: 'product7',
		name: 'Baloon soy candle',
		price: '60',
		mainPic: 'balloon1.jpg',
		morePictures: ['balloon2.jpeg', 'balloon3.jpeg'],
	},
	{
		id: 'product8',
		name: 'Tress soy candle',
		price: '60',
		mainPic: 'stree1.jpeg',
		morePictures: ['stree2.jpeg', 'stree3.jpeg'],
	},
	{
		id: 'product9',
		name: 'Bubble soy candle',
		price: '90',
		mainPic: 'bbubble1.jpeg',
		morePictures: ['bbubble2.jpeg', 'bbubble3.jpeg'],
	},

	{
		id: 'product11',
		name: 'Candle stand',
		price: '80',
		mainPic: 'under1.jpg',
		morePictures: ['under2.jpg', 'under3.jpg'],
	},
	{
		id: 'product12',
		name: 'Oval candle stand',
		price: '80',
		mainPic: 'oval.jpeg',
		morePictures: ['oval2.jpeg', 'oval3.jpeg'],
	},
]

export const API_KEY = 'AIzaSyAvT0aKpnVoEBu1YwDAp2U8s5TMaY3jEM4'

export const LOGIN_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

export const SIGN_UP_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`

export const GET_USER_DATA_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`

export const CHANGE_DATA_ENDPOINT = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`

export const DATABASE_LINK = 'https://ecommerce-e3871-default-rtdb.firebaseio.com/'

export const toastConfig: ToastOptions<{}> = {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'dark',
}
