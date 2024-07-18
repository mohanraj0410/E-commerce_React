import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { shopContext } from '../../Context/ShopContext'

const ProductDisplay = ({ image, name, new_price, old_price, id }) => {

    const { addToCart } = useContext(shopContext)

    return (
        <div className='productDisplay'>
            <div className='productDisplay-left'>
                <div className='productDisplay-img'>
                    <img className='productDisplay-main-image' src={image} alt='product image' />
                </div>
                <div className='productDisplay-img-list'>
                    <img src={image} alt='product image' />
                    <img src={image} alt='product image' />
                    <img src={image} alt='product image' />
                    <img src={image} alt='product image' />
                </div>
            </div>
            <div className='productDisplay-right'>
                <h1>{name}</h1>
                <div className='productDisplay-star'>
                    <img src={star_icon} alt='star icon' />
                    <img src={star_icon} alt='star icon' />
                    <img src={star_icon} alt='star icon' />
                    <img src={star_icon} alt='star icon' />
                    <img src={star_dull_icon} alt='star icon' />
                    <p>(124)</p>
                </div>
                <div className='productDisplay-price'>
                    <div className='productDisplay-oldPrice'>
                        $ {old_price}
                    </div>
                    <div className='productDisplay-newPrice'>
                        $ {new_price}
                    </div>
                </div>
                <div className='productDisplay-description'>
                    Explore our seamless app designed to bring you the latest in fashion, beauty, and lifestyle. With personalized recommendations, exclusive offers, and a sleek, intuitive interface, staying ahead of the curve has never been easier. Join a community of trendsetters and make every day a style statement.
                </div>
                <div className='productDisplay-size'>
                    <h1>Select Size</h1>
                    <div className='productDisplay-size'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXl</div>
                    </div>
                </div>
                <button onClick={() => addToCart(id)} className='productDisplay-size-button'>ADD TO CART</button>
                <p className='productDisplay-category'>
                    <span>Category : </span>Women, TShirt, Crop Top
                </p>
                <p className='productDisplay-category'>
                    <span>Tags : </span>Modern, Latest
                </p>
            </div>
        </div>
    )
}

export default ProductDisplay