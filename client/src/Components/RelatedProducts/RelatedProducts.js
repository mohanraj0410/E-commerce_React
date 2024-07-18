import React from 'react'
import "./RelatedProducts.css"
import data_product from '../Assets/data'
import Item from '../Items/Item'

const RelatedProducts = () => {
    return (
        <div className='relatedProducts'>
            <h1>Related Products</h1>
            <hr />
            <div className='RelatedProducts-item'>
                {
                    data_product.map((data, index) => {
                        return (
                            <Item key={index} {...data}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProducts