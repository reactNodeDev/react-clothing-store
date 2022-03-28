import { createContext, useState } from "react";

const hideTheCart = (isTheCartOpen, cartSetterFunction) => {
  if (isTheCartOpen) {
    cartSetterFunction(!isTheCartOpen);
  }
};

const addThisItemToCart = (cartItemsArray, itemToAdd) => {
  //check if the item to be added already exists in cart
  const doesItemAlreadyExist = cartItemsArray.find(
    (item) => item.id === itemToAdd.id
  );

  //if the item already exists in cart
  if (doesItemAlreadyExist) {
    return cartItemsArray.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  //if the item does not exist
  if (!doesItemAlreadyExist) {
    return [...cartItemsArray, { ...itemToAdd, quantity: 1 }];
  }
};

const subtractProductFromCart = (cartItemsArray, itemToAdd) => {
  //check if the item to be added already exists in cart
  const doesItemAlreadyExist = cartItemsArray.find(
    (item) => item.id === itemToAdd.id
  );

  //if the item already exists in cart
  if (doesItemAlreadyExist) {
    return cartItemsArray.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  hideCart: () => {},
  dontHideCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const hideCart = () => {
    hideTheCart(isCartOpen, setIsCartOpen);
  };

  // method that is called when 'add to cart' is clicked
  const addItemToCart = (productToAdd) => {
    setCartItems(addThisItemToCart(cartItems, productToAdd));
  };

  const subtractItemFromCart = (productToAdd) => {
    setCartItems(subtractProductFromCart(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    hideCart,
    cartItems,
    setCartItems,
    addItemToCart,
    subtractItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
