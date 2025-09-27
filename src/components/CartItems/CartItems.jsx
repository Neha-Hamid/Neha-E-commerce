import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromcart, cartSizes } = useContext(ShopContext);

  // new states for messages
  const [promoMessage, setPromoMessage] = useState('');
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handlePromoSubmit = (e) => {
    e.preventDefault(); // prevent refresh
    setPromoMessage('Invalid promo code');
    setTimeout(() => setPromoMessage(''), 2500); // auto hide
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    setCheckoutMessage('Front-end only');
    setTimeout(() => setCheckoutMessage(''), 2500); // auto hide
  };

  return (
    <div className='cartitems'>
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartiems-format cartitem-format-main">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>
                  {e.name}
                  {cartSizes && cartSizes[e.id] ? ` (${cartSizes[e.id]})` : ""}
                </p>
                <p className='ms-3'>${e.new_price}</p>
                <button className='cartitems-quantity ms-2'>{cartItems[e.id]}</button>
                <p className='ms-3'>${e.new_price * cartItems[e.id]}</p>
                <img
                  className='cartitem-remove-icon'
                  src={remove_icon}
                  onClick={() => { removeFromcart(e.id) }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p className="cartitems-subtotal">${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here</p>
        <form className="cartitems-promobox" onSubmit={handlePromoSubmit}>
          <input type="text" placeholder='promo code' />
          <button type="submit">Submit</button>
        </form>
        {promoMessage && <div className="popup-message">{promoMessage}</div>}
        <div className='pay-button'>
          <button
            className='btn btn-danger rounded-5 mt-5 btn-lg vw-75'
            onClick={handleCheckout}
          >
            PROCEED TO CHECKOUT
          </button>
          {checkoutMessage && <div className="popup-message">{checkoutMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default CartItems;
