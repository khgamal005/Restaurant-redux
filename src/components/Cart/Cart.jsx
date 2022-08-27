import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddToCart, clearCart, Decrees, getTotals, RemoveFromCart } from '../../redux/CartSlice'
import "./Style.css"

const Cart = () => {
  const state = useSelector(state => state.Cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals());
  }, [state, dispatch]);
  const handleAddToCart = (product) => {
    dispatch(AddToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(Decrees(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(RemoveFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <section className='cart'>
      <div className='container'>
        <div className="cart-container">
          <h2>Shopping Cart</h2>
          {state.cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is currently empty</p>
              <div className="start-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="titles">
                <h3 className="product-title">Order</h3>
                <h3 className="price">Price</h3>
                <h3 className="quantity">Quantity</h3>
                <h3 className="total">Total</h3>
              </div>
              <div className="cart-items">
                {state.cartItems &&
                  state.cartItems.map((cartItem) => (
                    <div className="cart-item" key={cartItem.id}>
                      <div className="cart-product">
                        <img src={cartItem.image} alt={cartItem.name} />
                        <div>
                          <h3>{cartItem.name}</h3>
                          <button onClick={() => handleRemoveFromCart(cartItem)}>
                            <i className='fa fa-times'></i>
                          </button>
                        </div>
                      </div>
                      <div className="cart-product-price">$ {cartItem.price}</div>
                      <div className="cart-product-quantity">
                        <button onClick={() => handleDecreaseCart(cartItem)}>
                          -
                        </button>
                        <div className="count">{cartItem.cartQouantity}</div>
                        <button onClick={() => handleAddToCart(cartItem)}>+</button>
                      </div>
                      <div className="cart-product-total-price">
                        ${cartItem.price * cartItem.cartQouantity}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="cart-summary">
                <button className="clear-btn" onClick={() => handleClearCart()}>
                  Clear Cart
                </button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">$ {state.cartTotalAmount}</span>
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  <button>Check out</button>
                  <div className="continue-shopping">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      <span>Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Cart
