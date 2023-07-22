import { CREATE_BURGER,ADD_TO_CART,REMOVE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY,RESET_CART,INCREASE_INGREDIENT,DECREASE_INGREDIENT} from "../Actions";
const initialState = {
  burgers: [
    {
      id:0,
      name:"Chicken makhani burger",
      ingredients:{
        Meat:1,
        Cheese:2,
        Lettuce:3,
        Tomato:4,
        AlooTikki:0,
        
      },
      price:100,
      description:"A non-veg burger with loaded ingredients with a little tangy-spicy flavour to spice up your mood",
      url:"https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg"
    },
    {
      id:1,
      name:"Chicken tikka Burger",
      ingredients:{
        Meat:1,
        Cheese:2,
        Lettuce:2,
        Tomato:4,
        AlooTikki:0,

      },
      price:200,
      url:"https://d3gy1em549lxx2.cloudfront.net/854cb359-11d2-4a8d-a4d4-bafc06b6dd7c.jpg",
      description:"Enjoy our new Chicken tikka burger for all our tikka lovers"
      

    },
    {
      id:2,
      name:"Vegetable Deluxe",
      ingredients:{
        Meat:0,
        Cheese:3,
        Lettuce:7,
        Tomato:4,
        AlooTikki:2,

      },
      price:300,
      url:"https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Vegetable-Deluxe-2:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
      description:"The ultimate burger made for our veg lovers"
      

    },
    {
      id:3,
      name:"Non-Veg Deluxe",
      ingredients:{
        Meat:2,
        Cheese:3,
        Lettuce:2,
        Tomato:2,
        AlooTikki:0,

      },
      price:250,
      url:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
      description:"The ultimate burger for all our non veg lovers"
      

    },
    {
      id:4,
      name:"Non -Veg Peri Peri Burger",
      ingredients:{
        Meat:2,
        Cheese:3,
        Lettuce:1,
        Tomato:2,
        AlooTikki:0,

      },
      price:289,
      url:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
      description:"The spicy non veg burger which once eated make you eat more",
      

    },
    {
      id:5,
      name:"Aloo Tikki",
      ingredients:{
        Meat:0,
        Cheese:3,
        Lettuce:1,
        Tomato:3,
        AlooTikki:2,

      },
      price:45,
      url:"https://www.jumboking.co.in/wp-content/uploads/2023/01/Zomato_Crispy-Veg-Burger.webp",
      description:"The common aloo tikki burger with a fresh tikki and vegies",
    },
    {
      id:6,
      name:"Cheesy Delight",
      ingredients:{
        Meat:0,
        Cheese:5,
        Lettuce:1,
        Tomato:2,
        AlooTikki:1,

      },
      price:100,
      url:"https://spicyindiankitchen.com/wp-content/uploads/2019/04/burger.jpg-500x375.jpg",
      description:"The Cheesy burger with loads of slices of cheese and vegies",
    },
    {
      id:7,
      name:"Crispy Veg burger",
      ingredients:{
        Meat:0,
        Cheese:5,
        Lettuce:1,
        Tomato:2,
        AlooTikki:1,

      },
      price:100,
      url:"https://img-global.cpcdn.com/recipes/da9a20e21c1a5aa4/680x482cq70/veggie-crispy-burger-recipe-main-photo.jpg",
      description:"The crispy makhani wrap to made with our love for you",
    },
    {
      id:8,
      name:"French Fries",
      type:"sidedish",
      price:100,
      description:"Crispy, golden perfection - French fries, pure satisfaction!",
      url:"https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800"
    },
    {
      id:9,
      name:"Crispy Veg makhani wrap",
      type:"sidedish",
      price:80,
      description:"A veg makhani wrap that just melts once you take a bite.",
      url:"https://product-assets.faasos.io/production/product/image_1679306314453_Creamy_makhani_falafel_wrap.JPG"
    },
    {
      id:10,
      name:"Choco Lava Cake",
      type:"sidedish",
      price:100,
      description:"Decadent Delights: Indulge in the Irresistible Magic of Choco Lava Cake",
      url:"https://www.bakingo.com/blog/wp-content/uploads/2022/06/best-choco-lava-cake-recipe-ever.jpg"
    }


  ],
  
  cart:[],
  total:0,
  
};
const INGREDIENT_PRICES = {
  Cheese: 15,
  Meat: 50,
  Lettuce: 5,
  Tomato: 10,
  AlooTikki: 25,
};

  
const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_CART:
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case CREATE_BURGER:
      const { burger } = action.payload;
      const newBurger={
        ...burger,
        quantity:1,
      }
      return {
        ...state,
        cart: [...state.cart, newBurger],
        total: state.total + newBurger.price,
        
        
      };
      case ADD_TO_CART:
      const { burgerId } = action.payload;
      const burgerToAdd = state.burgers.find((burger) => burger.id === burgerId);
      if (burgerToAdd) {
        const existingBurger = state.cart.find((burger) => burger.id === burgerId);
        if (existingBurger) {
          // If the burger is already in the cart, increase its quantity
          return {
            ...state,
            cart: state.cart.map((burger) =>
              burger.id === burgerId ? { ...burger, quantity: burger.quantity + 1 } : burger
            ),
            total: state.total + burgerToAdd.price,
          };
        } else {
          // If the burger is not in the cart, add it with quantity = 1
          return {
            ...state,
            cart: [...state.cart, { ...burgerToAdd, quantity: 1 }],
            total: state.total + burgerToAdd.price,
          };
        }
      }
      return state;
      case REMOVE_FROM_CART:
        const { burgerId: removeBurgerId } = action.payload;
        const burgerToRemove = state.cart.find((burger) => burger.id === removeBurgerId);
        if (burgerToRemove) {
          // if (burgerToRemove.quantity > 1) {
          //   // If the burger quantity is more than 1, decrease its quantity
          //   return {
          //     ...state,
          //     cart: state.cart.map((burger) =>
          //       burger.id === removeBurgerId ? { ...burger, quantity: burger.quantity - 1 } : burger
          //     ),
          //     total: state.total - burgerToRemove.price,
          //   };
          // } else {
          //   // If the burger quantity is 1, remove it from the cart
          //   return {
          //     ...state,
          //     cart: state.cart.filter((burger) => burger.id !== removeBurgerId),
          //     total: state.total - burgerToRemove.price,
          //   };
          // }
          console.log(burgerToRemove.quantity);
          return {
            ...state,
            cart: state.cart.filter((burger) => burger.id !== removeBurgerId),
            total: state.total - burgerToRemove.price*burgerToRemove.quantity,
          };
        }
        return state;
        case INCREASE_QUANTITY:
        const { burgerId: increaseburgerId } = action.payload;
        return {
          ...state,
          cart: state.cart.map((burger) =>
            burger.id === increaseburgerId ? { ...burger, quantity: burger.quantity + 1 } : burger
          ),
          total: state.total + state.cart.find((burger) => burger.id === increaseburgerId).price,
        };

      case DECREASE_QUANTITY:
        const { burgerId: decreaseBurgerId } = action.payload;
        const burgerToDecrease = state.cart.find((burger) => burger.id === decreaseBurgerId);
        if (burgerToDecrease.quantity > 1) {
          return {
            ...state,
            cart: state.cart.map((burger) =>
              burger.id === decreaseBurgerId ? { ...burger, quantity: burger.quantity - 1 } : burger
            ),
            total: state.total - burgerToDecrease.price,
          };
        } else {
          return state;
        }
        case 'INCREASE_INGREDIENT':
      const { burgerId: increasedBurgerId, ingredient } = action.payload;
      const updatedCartAfterIncrease = state.cart.map((burger) => {
        if (burger.id === increasedBurgerId) {
          const updatedIngredientQuantity = burger.ingredients[ingredient] + 1;
          const updatedPrice = burger.price + INGREDIENT_PRICES[ingredient];
          return {
            ...burger,
            ingredients: {
              ...burger.ingredients,
              [ingredient]: updatedIngredientQuantity,
            },
            price: updatedPrice,
          };
        }
        return burger;
      });
      const updatedTotal = updatedCartAfterIncrease.reduce((total, burger) => total + burger.price, 0);
      return {
        ...state,
        cart: updatedCartAfterIncrease,
        total: updatedTotal,
      };

      case 'DECREASE_INGREDIENT':
        const { burgerId: decreasedBurgerId, ingredient: decreasedIngredient } = action.payload;
        const updatedCartAfterDecrease = state.cart.map((burger) => {
          if (burger.id === decreasedBurgerId) {
            const updatedIngredientQuantity = Math.max(burger.ingredients[decreasedIngredient] - 1, 0);
            const updatedPrice =
              burger.price - (burger.ingredients[decreasedIngredient] > 0 ? INGREDIENT_PRICES[decreasedIngredient] : 0);
            return {
              ...burger,
              ingredients: {
                ...burger.ingredients,
                [decreasedIngredient]: updatedIngredientQuantity,
              },
              price: Math.max(updatedPrice, 0),
            };
          }
          return burger;
        });
        const updatedTotalAfterDecrease = updatedCartAfterDecrease.reduce((total, burger) => total + burger.price, 0);
        return {
          ...state,
          cart: updatedCartAfterDecrease,
          total: Math.max(updatedTotalAfterDecrease, 0),
        };
    default:
      return state;
  }
};

export default burgerReducer;