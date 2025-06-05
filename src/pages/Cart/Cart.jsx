import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map(({ _id, name, image, price }, index) => {
          if (cartItems[_id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-list">
                  <img src={image} alt="" />
                  <p>{name}</p>
                  <p>${price}</p>
                  <p>{cartItems[_id]}</p>
                  <p>${cartItems[_id] * price}</p>
                  <p className="cross" onClick={() => removeFromCart(_id)}>
                    {" "}
                    {"  "}x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() ? 2 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + (getTotalCartAmount() ? 2 : 0)}</b>
            </div>
          </div>
          <button onClick={() => navigate("/orders")}>
            Proceed to checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have prome code, enter here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
