import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import {removeFromCart,addToCart,increaseQuantity,decreaseQuantity} from '../Actions'
import './Header.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const HomePage = () => {
  const dispatch = useDispatch();
  const burgers = useSelector((state) => state.burgers);
  const cartItems = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  let a=cartItems.length;

  const handleRemoveFromCart = (burgerId) => {
    dispatch(removeFromCart(burgerId));
  };
  const handleClick=(burgerId)=>{
    dispatch(addToCart(burgerId))
  }
  
 
  return (
    
    <div>
      <header className="header">
      <div className="header-content">
        <h1>Welcome to Burger Heaven  </h1>
        <p>Create and customize your perfect burger</p>
      </div>
   
      {a}
      <Link to='/cart'><button className="cart-button"><ShoppingCartIcon></ShoppingCartIcon></button></Link>
      
    </header>  
      <br></br>
      <div className='Burger-header'>
        <i><b>Our Burgers</b></i>
      </div>
      <hr></hr>
      
      {burgers.map((burger) => (
        <div className='cart-items' key={burger.id}>
      
          <h2>{burger.name}</h2>
          <img src={burger.url}></img>
          {/* {price=burger.ingredients.tomato+burger.ingredients.cheese+burger.ingredients.meat+burger.ingredients.lettuce}   */}
          <br></br>
          <h3>Price:{burger.price}Rs</h3>
          <p>{burger.description}</p>
            <h3></h3>
          {burger.type==="sidedish"?(
            <div><h4>SideDish</h4></div>
          ):(
            <div>

          <ul>
            <span className='ingredients'>
              
          <b><h3>Ingredients:</h3></b>
            </span>
            {Object.entries(burger.ingredients).map(([ingredient, quantity]) => (
              <li key={ingredient}>
                {ingredient} Slice: {quantity}

              </li>
            ))}
          </ul>
          </div>
          )}
          <button onClick={() => handleClick(burger.id)}><AddShoppingCartIcon></AddShoppingCartIcon></button>
          
        </div>
      ))}
      <hr></hr>
      <br></br>
      <div>
      
    </div >
      <div className='Customize'> 
              <h3>Didnt like our burger? We got a solution for you.</h3>
              <br></br>
      <Link to='/CustomizeBurger' className='customize-link'><h2><i>Make your Burger</i></h2></Link>
      <br></br>
      "All Rights Reserved © [Sumeet] [2023]"
      </div>

    </div>
  );
}

export default HomePage