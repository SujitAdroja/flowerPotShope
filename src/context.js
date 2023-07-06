import React, { useContext, useState, useReducer, useEffect } from "react";
import reducer from "./redux";
import flowerPot from "./data";
export const AppContext = React.createContext();

const initialState = {
  pot: flowerPot,
  total: 0,
  amount: 0,
  cart: [],
};
export function AppProvider({ children }) {
  const [openSidebar, setSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementAmount = function (id) {
    dispatch({ type: "INCREMENT_AMOUNT", payLoad: +id });
  };
  const decrementAmount = function (id) {
    dispatch({ type: "DECREMENT_AMOUNT", payLoad: +id });
  };
  const openSidebarMenu = function () {
    setSidebarOpen(true);
  };
  //add to cart
  const addToCart = function () {
    dispatch({ type: "ADD_TO_CART" });
    dispatch({ type: "TOTAL_AMOUNT" });
  };
  const closeSidebarMenu = function () {
    setSidebarOpen(false);
  };
  const openIsCartOpen = function () {
    setIsCartOpen(true);
  };
  const closeIsCartOpen = function () {
    setIsCartOpen(false);
  };
  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        openSidebarMenu,
        closeSidebarMenu,
        incrementAmount,
        decrementAmount,
        isCartOpen,
        addToCart,
        openIsCartOpen,
        closeIsCartOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = function () {
  return useContext(AppContext);
};
