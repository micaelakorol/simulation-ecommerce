import { TYPES } from "../actions/ShoppingAction";
//para acceder a los productos, o a cart hacemos: state.products, o state.cart
export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: "Zapatillas basket",
      title: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything can offer.",
      price: 125.0,
      desc: 50,
      priceOrig: 250.0,
      image: "product-",
    },
  ],
  cart: [
    //cart start empty
  ],
};
//actions of cart:
export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      //save new product
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      //compare id's
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            // if the id coincide, quantity increase +1...
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state, //return state
            //if the element does not exist , quantity = 1
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item 
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.CLEAR_CART:
      //clean cart
      return shoppingInitialState;

    default:
      return state;
  }
}
