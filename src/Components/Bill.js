import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import './Customize.css'
import { resetCart } from '../Actions';
import { Link, useParams } from 'react-router-dom';
const Bill = () => {
  const cartItems = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  const handleHomeButtonClick = () => {
    // Dispatch the resetCart action when the home button is clicked
    dispatch(resetCart());
  };
  const [orderId, setOrderId] = useState(generateOrderId());
  function generateOrderId() {
    const timestamp = Date.now();
    return `ORDER-${timestamp}`;
  }
  return (
    <div>

    <header className="header">
      <div className="header-content">
        <h1>Brrrgrrr</h1>
    <h2>Bill</h2>
    <Link to='/'><button onClick={handleHomeButtonClick}>Home</button></Link>
      </div>
      
    </header> 
    <div className="bill-container">
    <hr />
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
      ) : (
      <ol>
        {cartItems.map((burger) => (
          <li key={burger.id} className="burger-item">
            <h3>{burger.name}</h3>
            
            Burger ID: {burger.id}
            <br />
            Quantity: {burger.quantity}
            <br />
            {burger.type==="sidedish"?(
            <div><h4>SideDish</h4></div>
          ):(
            <div>

Cheese Slice: {burger.ingredients.Cheese}
            <br />
            Meat Slice: {burger.ingredients.Meat}
            <br />
            Tomato Slice: {burger.ingredients.Tomato}
            <br />
            Lettuce Slice: {burger.ingredients.Lettuce}
            <br />
            AlooTikki: {burger.ingredients.AlooTikki}
          </div>
          )}
            Price: {burger.price}
            <br />
          </li>
        ))}
        <h3>Total: {total}</h3>
        <h3>Order ID: {orderId}</h3>
      </ol>
    )}
  </div>
  <div className='Thanks'>
    <img src='https://img.freepik.com/free-vector/thank-you-placard-concept-illustration_114360-13436.jpg?w=2000' className='ingredient-image' alt='Thank you'></img>
    <br>
    </br>
    <h2><i>For ordering do order again.</i></h2>
    <br></br>
    <img src='https://www.freeiconspng.com/uploads/smile-transparent-background-9.png' className='ingredient-image' ></img>
  </div>
    </div>
  )
}

export default Bill