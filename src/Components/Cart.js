import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {removeFromCart,increaseQuantity,decreaseQuantity,increaseIngredient,decreaseIngredient} from '../Actions'
import './Header.css'

import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();
  
    
  const handleIncreaseIngredient = (burgerId, ingredient) => {
    dispatch(increaseIngredient(burgerId, ingredient));
  };
  
  const handleDecreaseIngredient = (burgerId, ingredient) => {
    dispatch(decreaseIngredient(burgerId, ingredient));
  };
  const handleRemoveFromCart = (burgerId) => {
    dispatch(removeFromCart(burgerId));
  };
  const handleIncreaseQuantity = (burgerId) => {
    dispatch(increaseQuantity(burgerId));
  };

  const handleDecreaseQuantity = (burgerId) => {
    dispatch(decreaseQuantity(burgerId));
  };
 
  
  return (
    <div>
        <header className="header">
      <div className="header-content">
        <h1>Brrrgrrr</h1>
        <p>Cart</p>
      </div>
      <Link to='/'><button>Back</button></Link>
    </header> 
    <br></br>
        {cartItems.length === 0 ? (
          <div style={{textAlign:'center'}}>

        <h2><i>Your cart is empty.</i></h2>
          </div>
        
      ) : (
        <div>

        <ol>
          {cartItems.map((burger) => (
            <div className='cart-items'>

            <li key={burger.id}>
              {/* {burger.id}
              <br></br> */}
              <h3>{burger.name}</h3>
              
             
              Burger ID: {burger.id} 
              <br></br>
              <img src={burger.url}></img>
              <br></br>
              <button onClick={() => handleIncreaseQuantity(burger.id)}>+</button>
               <h3>{burger.quantity}</h3>
                <button onClick={() => handleDecreaseQuantity(burger.id)}>-</button> 
                <br></br>
                <br></br>
              {burger.type==="sidedish"?(
                <div>
                  ssss
                <div>
                  <h2>

                SideDish  
                  </h2>
                  <br></br>
                </div>
                <div className='Side'>
            <br></br>
            <h3>{burger.description}</h3>
            </div>
                </div>
          ):(
            <div>

              <h3>
              Quantity:
              </h3>
              
                <h3>Ingredients:</h3>
                  <div>
                    <span>Cheese Slice: {burger.ingredients.Cheese}</span>
                    <button onClick={() => handleIncreaseIngredient(burger.id, 'Cheese')}>+</button>
                    <button onClick={() => handleDecreaseIngredient(burger.id, 'Cheese')}>-</button>
                  </div>
                  <div>
                    <span>Meat Slice: {burger.ingredients.Meat}</span>
                    <button onClick={() => handleIncreaseIngredient(burger.id, 'Meat')}>+</button>
                    <button onClick={() => handleDecreaseIngredient(burger.id, 'Meat')}>-</button>
                  </div>
                  <div>
                    <span>Tomato Slice: {burger.ingredients.Tomato}</span>
                    <button onClick={() => handleIncreaseIngredient(burger.id, 'Tomato')}>+</button>
                    <button onClick={() => handleDecreaseIngredient(burger.id, 'Tomato')}>-</button>
                  </div>
                  <div>
                    <span>Lettuce Slice: {burger.ingredients.Lettuce}</span>
                    <button onClick={() => handleIncreaseIngredient(burger.id, 'Lettuce')}>+</button>
                    <button onClick={() => handleDecreaseIngredient(burger.id, 'Lettuce')}>-</button>
                  </div>
                  
                  <div>
                    <span>AlooTikki Slice: {burger.ingredients.AlooTikki}</span>
                    <button onClick={() => handleIncreaseIngredient(burger.id, 'AlooTikki')}>+</button>
                    <button onClick={() => handleDecreaseIngredient(burger.id, 'AlooTikki')}>-</button>
                  </div>
              <br></br>
          </div>
          )}
          
              Price:{burger.price}

              <br></br>
              
              <button onClick={() => handleRemoveFromCart(burger.id)}>Remove</button>
              <br></br>
              <br></br>

            </li>

              </div>
              ))}
        </ol>
        <div className='Total'>
        <br></br>
        <i>Total: {total}</i>
        <br></br>

      <Link to='/Bill'><button>Create Bill</button></Link>
        
         </div>
        </div>
        
      )}
        </div>
      
  )
}

export default Cart