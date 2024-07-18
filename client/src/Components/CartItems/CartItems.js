import React, { useContext } from 'react';
import "./CartItems.css";
import { shopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const CartItems = () => {

    const navigate = useNavigate();
    const { all_product, cartItem, removeFromCart, getTotalCartAmount } = useContext(shopContext);


    const onToken = (token) => {
        console.log(token);
        const body = {
            token,
            amount: getTotalCartAmount() * 100,
        };

        fetch('http://localhost:5000/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(data => {
                console.log(`We are in business, ${data.success}`);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='CartItems'>
            <div className='cartItems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {
                all_product.map((item, index) => {
                    if (cartItem[item.id] > 0) {
                        return (
                            <div key={index}>
                                <div className='cartItems-format'>
                                    <img src={item.image} alt='cartItems-image' className='cartItems-icon' />
                                    <p>{item.name}</p>
                                    <p>$ {item.new_price}</p>
                                    <button className='cartItem-quantity'>{cartItem[item.id]}</button>
                                    <p>$ {item.new_price * cartItem[item.id]}</p>
                                    <img onClick={() => removeFromCart(item.id)} src={remove_icon} alt='Remove' />
                                </div>
                                <hr />
                            </div>
                        )
                    }
                    return null;
                })
            }
            <div className='cartItems-down'>
                <div className='cartItems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartItems-total-item'>
                            <p>SubTotal</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartItems-total-items'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartItems-total-items'>
                            <h3>Total</h3>
                            <h3>$ {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    {
                        getTotalCartAmount() !== 0 ? (<StripeCheckout
                            token={onToken}
                            stripeKey="pk_test_51PawunRxOcoelWxWekfevOSPJWUhYhK1bOYtKKeiOSDeWNH1aXHEOSm1KvUhQDlLOpR0J0NClOs1WGZQcK0U07yy006YgAUKbL"
                            name="Shopify.com"
                            description="E-commerce"
                            image="https://www.google.com/imgres?q=user%20image%20download%20free&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F149%2F149071.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&docid=IuY_NaZ2k4MpJM&tbnid=KnR9uI1e8d4qTM&vet=12ahUKEwi8wuqfw5yHAxUrRmwGHaVlCv0QM3oECDYQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwi8wuqfw5yHAxUrRmwGHaVlCv0QM3oECDYQAA"
                            amount={getTotalCartAmount() * 100}
                            currency="USD"
                        >
                            <button>PROCEED TO ORDER</button>
                        </StripeCheckout>) :
                            (<button >PROCEED TO ORDER</button>)
                    }

                </div>
                <div className='cartItems-promoCode'>
                    <p>If you have promo Code, please enter it here</p>
                    <div className='cartItem-promoBox'>
                        <input placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;