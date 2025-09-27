import React, { createContext, useState } from 'react';
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultcart());
  const [cartSizes, setCartSizes] = useState({}); 

  //  updated to optionally accept size
  const addtocart = (ItemId, size) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    if (size) {
      setCartSizes((prev) => ({ ...prev, [ItemId]: size }));
      console.log(`Item ${ItemId} added with size ${size}`);
    }
    console.log(cartItems);
  };

  const removeFromcart = (ItemId) => {
    setCartItems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem;
  }

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addtocart,
    removeFromcart,
    cartSizes // expose sizes for display if needed
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
