import React from 'react'
import "./Popular.css"
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {
   
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className='popular-item'>
                {
                    data_product.map((data, index) => {
                        return (
                            <Item {...data} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Popular

