import React, { useContext } from 'react'
import "./css/ShopCategory.css"
import { shopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Items/Item'

const ShopCategory = ({ category, banner }) => {

    const { all_product } = useContext(shopContext)

    const filterData = all_product.filter((product => product.category === category))

    return (
        <div className='shop-category'>
            <img src={banner} alt='banner' />
            <div className='shop-category-index-sort'>
                <p>
                    <span>showing 1-12</span> out of the products
                </p>
                <div className='shop-category-sort'>
                    sort by <img src={dropdown_icon} alt='dropDown' />
                </div>
            </div>
            <div className='shop-category-products'>
                {
                    filterData.map((product, index) => {
                        return (
                            <Item key={index} {...product} />
                        )
                    })
                }
            </div>
            <div className='shop-category-loadMore'>
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory
