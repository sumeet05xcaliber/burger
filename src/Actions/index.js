// Actions.js
export const RESET_CART = 'RESET_CART';
export const INCREASE_INGREDIENT='INCREASE_INGREDIENT';
export const DECREASE_INGREDIENT='DECREASE_INGREDIENT';
export const CREATE_BURGER = 'CREATE_BURGER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
// ... (existing code)

export const increaseIngredient = (burgerId, ingredient) => {
  return {
    type: INCREASE_INGREDIENT,
    payload: { burgerId, ingredient },
  };
};


export const decreaseIngredient = (burgerId, ingredient) => {
  return {
    type: DECREASE_INGREDIENT,
    payload: { burgerId, ingredient },
  };
};


export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};

export const createBurger = (burger) => ({
  type: CREATE_BURGER,
  payload: {
    burger,
  },
});

export const addToCart = (burgerId) => ({
  type: ADD_TO_CART,
  payload: {
    burgerId,
  },
});

export const removeFromCart = (burgerId) => ({
  type: REMOVE_FROM_CART,
  payload: {
    burgerId,
  },
});
export const increaseQuantity = (burgerId) => ({
  type: INCREASE_QUANTITY,
  payload: {
    burgerId,
  },
});

export const decreaseQuantity = (burgerId) => ({
  type: DECREASE_QUANTITY,
  payload: {
    burgerId,
  },
});