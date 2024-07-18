import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Description from '../Components/Description/Description'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
    const { all_product } = useContext(shopContext)
    const { productId } = useParams()


    const product = all_product.find((product) => product.id === Number(productId))
    return (
        <div className='product'>
            <Breadcrumbs product={product} />
            <ProductDisplay {...product} />
            <Description />
            <RelatedProducts />
        </div>
    )
}

export default Product