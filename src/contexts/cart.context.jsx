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

const calculateCartTotal = (cartItemsArray) => {
  const totalSum = cartItemsArray.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return totalSum;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  hideCart: () => {},
  dontHideCart: () => {},
  cartItems: [],
  cartTotal: 0,
  setCartItems: () => {},
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  letsCalculateCartTotal: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, calcCartTotal] = useState(0);

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

  const letsCalculateCartTotal = (cartItems) => {
    calcCartTotal(calculateCartTotal(cartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    hideCart,
    cartItems,
    cartTotal,
    setCartItems,
    addItemToCart,
    subtractItemFromCart,
    letsCalculateCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
