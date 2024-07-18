import { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    };

    const getTotalCartAmount = () => {
        let totalAmt = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmt += itemInfo.new_price * cartItem[item];
                }
            }
        }
        return totalAmt;
    };

    const getTotalCartItems = () => {
        let totalItem = 0
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item]
            }
        }
        return totalItem
    }

    const contextVal = { all_product, cartItem, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <shopContext.Provider value={contextVal}>
            {props.children}
        </shopContext.Provider>
    );
};

export default ShopContextProvider;
