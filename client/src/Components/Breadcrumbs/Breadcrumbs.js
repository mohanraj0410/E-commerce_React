import React from 'react'
import "./Breadcrumbs.css"
import breadcrum_arrow from "../Assets/breadcrum_arrow.png"

const Breadcrumbs = ({ product }) => {

    return (
        <div>
            <div className='Breadcrumbs' >
                <span>Home</span> <img src={breadcrum_arrow} alt='arrow_icon' /> <span>Shop</span> <img src={breadcrum_arrow} alt='arrow_icon' /> <span>{product.category}</span> <img src={breadcrum_arrow} alt='arrow_icon' /><span className='main-span'> {product.name}</span>
            </div>
        </div>
    )
}

export default Breadcrumbs