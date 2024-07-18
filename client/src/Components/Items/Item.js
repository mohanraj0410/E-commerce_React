import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ image, name, new_price, old_price, id }) => {
    return (
        <div className='item'>
            <Link to={`/product/${id}`} onClick={window.scrollTo(0,0)}>
                <img src={image} alt='' />
                <p>{name}</p>
                <div className='item-price'>
                    <div className='item-price-new'>
                        ${new_price}
                    </div>
                    <div className='item-price-old'>
                        ${old_price}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item