import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import {increaseIngredient,deleteIngredient,createBurger,removeFromCart} from '../Actions'
import { useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'
import './Customize.css'

const CutsomizeBurger = () => {
  const dispatch = useDispatch();
  const [burgerName, setBurgerName] = useState('');
  const [cheese,setcheese]=useState(0);
  const [Tomato,setTomato]=useState(0);
  const [Meat,setMeat]=useState(0);
  const [lettuce,setLettuce]=useState(0);
  const [AlooTikki,setAlootikki]=useState(0);
  const cartItems = useSelector((state) => state.cart);
  const ingredientImages = {
    cheese: './cheese.png',
    Meat: './meat.png',
    lettuce: 'lettuce.png',
    Tomato: './tomato.png',
    AlooTikki: 'alootikkit.png'
  };
 

  let price=0;
  const handleCreateBurger = (e) => {
    e.preventDefault();

    // Create the burger object
    const newBurger = {
      id:uuidv4(),
      name: burgerName,
      ingredients:{
        Cheese:cheese,
        Meat:Meat,
        Tomato:Tomato,
        Lettuce:lettuce,
        AlooTikki:AlooTikki,
        
      },
      url:'./custom.png',
      price:price,
      
    };

    // Dispatch the createBurger action
    dispatch(createBurger(newBurger));

    // Reset the form
    setBurgerName('');
    setcheese(0);
    setMeat(0);
    setLettuce(0);
    setTomato(0);
    setAlootikki(0);
  };

  return (
    <>
     <header className="header">
      <div className="header-content">
        <h1>Brrrgrrr</h1>
        <p>Create and customize your perfect burger</p>
      </div>
      {/* <h3>{a}</h3> */}
      
      {/* <Link to='/cart'><button className="cart-button"><ShoppingCartIcon></ShoppingCartIcon></button></Link> */}
      
    </header> 
    {/* <form onSubmit={handleCreateBurger}>
      <div >
        <label htmlFor="burgerName">Burger Name:</label>
        <input
          type="text"
          id="burgerName"
          value={burgerName}
          onChange={(e) => setBurgerName(e.target.value)}
          required
          />
      </div>
      

      <button type="submit">Create Burger</button>
    </form>
    <br></br>
    <button onClick={()=>setcheese(cheese+1)}>Add chese</button>
    {cheese}
    <button onClick={(e)=>setcheese(cheese-1)}>Remove Chese</button>
    <br></br>
    <button onClick={()=>setMeat(Meat+1)}>Add meat</button>
    {Meat}
    <button onClick={(e)=>setMeat(Meat-1)}>Remove Meat</button>
    <br></br>
    <button onClick={()=>setLettuce(lettuce+1)}>Add lettuce</button>
    {lettuce}
    <button onClick={(e)=>setLettuce(lettuce-1)}>Remove lettuce</button>
    <br></br>
    <button onClick={()=>setTomato(Tomato+1)}>Add Tomato</button>
    {Tomato}
    <button onClick={(e)=>setTomato(Tomato-1)}>Remove Tomato</button>
    <br></br>
    <button onClick={()=>setAlootikki(AlooTikki+1)}>Add Aloo Tikki</button>
    {AlooTikki}
    <button onClick={(e)=>setAlootikki(AlooTikki-1)}>Remove Aloo Tikki</button>
    <br></br>
    {price=cheese*10+Meat*20+lettuce+Tomato+AlooTikki}
    
    <Link to='/'>home</Link> */}
    <form className="form" onSubmit={handleCreateBurger}>
  <div className="form-group">
    <label htmlFor="burgerName" className="label">
      Burger Name:
    </label>
    <input
      type="text"
      id="burgerName"
      className="input"
      placeholder='Enter your Burger Name...'
      value={burgerName}
      onChange={(e) => setBurgerName(e.target.value)}
      required
      />
  </div>

  <button type="submit" className="button">
    Create Burger
  </button>
      </form>
<br />
{/* <div className="burger">
  <div className="bun top"></div>
  {Array.from({ length: AlooTikki }, (_, index) => (
    <div className="aloo-tikki-slice" key={index}>aloo</div>
  ))}
  {Array.from({ length: cheese }, (_, index) => (
    <div className="cheese-slice" key={index}>cheese</div>
  ))}
  <div className="bun bottom"></div>
</div> */}
<div className='burger-make'>

<div className="burger">
  <div className="bun top">
    <img className='ingredient-image-bun' src='./burgertop.png' alt='Top Bun'></img>
  </div>
  {Object.entries(ingredientImages).map(([ingredient, imageUrl]) => {
    const ingredientState = eval(ingredient); // Access the state dynamically using eval()
    return Array.from({ length: ingredientState }, (_, index) => (
      <div>

      
      <img className="ingredient-image" src={imageUrl} alt={ingredient} key={index} />
    </div>
    ));
  })}
  <div className="bun bottom">
  <img className='ingredient-image-bun' src='./burgerbottombun.png' alt='bottom Bun'></img>

  </div>
</div>

  
<button className="button" onClick={() => setcheese(cheese + 1)}>
  Add Cheese
</button>
<span className="count">{cheese}</span>
<button className="button" onClick={(e) => {
  if (cheese > 0) {
    setcheese(cheese - 1);
  }
}}>
  Remove Cheese
</button>
<br />
<button className="button" onClick={() => setMeat(Meat + 1)}>
  Add Meat
</button>
<span className="count">{Meat}</span>
<button className="button" onClick={(e) => {
  if (Meat > 0) {
    setMeat(Meat - 1);
  }
  }}>
  Remove Meat
</button>
<br />
<button className="button" onClick={() => setLettuce(lettuce + 1)}>
  Add Lettuce
</button>
<span className="count">{lettuce}</span>
<button className="button" onClick={(e) => {
  if (lettuce > 0) {
    setLettuce(lettuce - 1);
  }
}}>
  Remove Lettuce
</button>
<br />
<button className="button" onClick={() => setTomato(Tomato + 1)}>
  Add Tomato
</button>
<span className="count">{Tomato}</span>
<button className="button" onClick={(e) => {
  if (Tomato > 0) {
    setTomato(Tomato - 1);
  }
  }}>
  Remove Tomato
</button>
<br />
<button className="button" onClick={() => setAlootikki(AlooTikki + 1)}>
  Add Aloo Tikki
</button>
<span className="count">{AlooTikki}</span>
<button className="button" onClick={(e) => {
  if (AlooTikki > 0) {
    setAlootikki(AlooTikki - 1);
  }
}}>
  Remove Aloo Tikki
</button>
<br />
<div className="price">
  Total Price: {price=cheese*15+Meat*50+lettuce*5+Tomato*10+AlooTikki*25}
</div>

<Link to="/" className="link">
  <button className='Home'>

  Home
  </button>
</Link>
    </div>

            </>
  );
};


export default CutsomizeBurger