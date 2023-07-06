import React from "react";
import { useGlobalContext } from "../context";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function Cart() {
  const { isCartOpen, closeIsCartOpen, cart, amount, total } =
    useGlobalContext();

  if (cart.length === 0) {
    return (
      <aside className={`${isCartOpen ? "cart-wrapper open" : "cart-wrapper"}`}>
        <div className="cart">
          <button className="btn-close " onClick={closeIsCartOpen}>
            <FaTimes />
          </button>
          <h2 className="secondary-heading">cart is empty</h2>
        </div>
      </aside>
    );
  }
  return (
    <aside className={`${isCartOpen ? "cart-wrapper open" : "cart-wrapper"}`}>
      <div className="cart">
        <button className="btn-close " onClick={closeIsCartOpen}>
          <FaTimes />
        </button>
        <div className="sub-links">
          {cart.map((item) => {
            const { img, name, amount, total, id } = item;
            return (
              <Link
                to={`/pot/${id}`}
                className="link-single"
                key={id}
                onClick={closeIsCartOpen}
              >
                <div className="cart-description">
                  <figure>
                    <img src={`/${img}`} alt={name} className="cart-img" />
                  </figure>
                  <div className="description">
                    <div>
                      <h2>{name}</h2>
                      <h3 className="cart-amount">
                        {amount > 1 ? "items" : "item"} : ({amount})
                      </h3>
                    </div>
                  </div>
                  <div className="cart-price">
                    <p>price </p>
                    <p> ( ${total} ) </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="cart-total-amounts">
          <div>
            <p>total items : {amount}</p>
            <p>total price : ${total}</p>
          </div>
          <button className="btn-cart-buy">BUY</button>
        </div>
      </div>
    </aside>
  );
}

export default Cart;
