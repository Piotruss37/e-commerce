import { products } from '@/constants'
import ProductItem from './ProductsItem'
const ProductsList = () => {
	return (
		<div className='products'>
			{products.map(product => {
				return (
					<ProductItem
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price}
						mainPic={product.mainPic}
						morePictures={product.morePictures}
					></ProductItem>
				)
			})}
		</div>
	)
}

export default ProductsList
