import React, { useContext, useState } from 'react'
import "./navBar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { shopContext } from '../../Context/ShopContext'


const NavBar = () => {

    const [menu, setMenu] = useState("shop")


    const { getTotalCartItems } = useContext(shopContext)

    return (
        <div className='navBar'>
            <div className='nav-logo'>
                <img src={logo} alt='nav-logo' />
                <p>SHOPIFY</p>
            </div>
            <ul className='nav-menu'>
                <Link to={'/'}><li onClick={() => setMenu("shop")}>Shop{menu === "shop" ? <hr /> : <></>}</li></Link>
                <Link to={'/men'}><li onClick={() => setMenu("men")}>Men{menu === "men" ? <hr /> : <></>}</li></Link>
                <Link to={'/women'}><li onClick={() => setMenu("women")}>Women{menu === "women" ? <hr /> : <></>}</li></Link>
                <Link to={'/kids'}><li onClick={() => setMenu("kids")}>Kids{menu === "kids" ? <hr /> : <></>}</li></Link>
            </ul>
            <div className='nav-login-cart'>
                <button><Link to={'login'}>Login</Link></button>
                <Link to={'/cart'}>
                    <img src={cart_icon} alt='cart-icon' />
                </Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default NavBar