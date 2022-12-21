/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer, useState } from "react";
import { TYPES } from "../actions/ShoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../Reducers/ShoppingReducer";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  //states
  const [changeState, setChangeState] = useState(false);
  const [onlyNav, setOnlyNav] = useState(false);

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
 
  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  //reset cart
  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };
  //delet element one by one
  const delFromCart = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };

  /* --------------------------------------------- */

  return (
    <UserContext.Provider
      value={{
        changeState,
        setChangeState,
        addToCart,
        clearCart,
        delFromCart,
        products,
        cart,
        onlyNav,
        setOnlyNav,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
