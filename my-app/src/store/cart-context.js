import { createContext, useState } from "react";

const CartContext = createContext({
  itemsAdded: [], 
  totalItemsAdded: 0,
  itemsWished: [],
  totalItemsWished: 0,
  addWish: (itemAdded) => {},
  removeWish: (itemId) => {},
  itemInWish: (itemId) => {},
  addItem: (itemAdded) => {},
  removeItem: (itemId) => {},
  itemInCart: (itemId) => {},
  totalAmount: () => {},
  cartCheckout: () => {},
});

export function CartContextProvider(props) {
  const [userCart, setUserCart] = useState(()=>JSON.parse(localStorage.getItem('cart')) || []);
  const [userWish, setUserWish] = useState(()=>JSON.parse(localStorage.getItem('Wish')) || []);

  function addItemHandler(itemAdded) {
    setUserCart((prevUserCart) => {
     const Cart = prevUserCart.concat(itemAdded);
    
      localStorage.setItem('cart', JSON.stringify(Cart))
      //localStorage.setItem('totalcount',userCart.length + 1  )
      return Cart
    });
   
  }

  function removerItemHandler(itemId) {
    setUserCart((prevUserCart) => {
      return prevUserCart.filter((item) => item.id !== itemId);
    });
  }

  function itemInCartHandler(itemId) {
    return userCart.some((item) => item.id === itemId);
  }

  function checkoutHandler() {
    return (userCart.length = 0);
  }

  function addWishHandler(itemAdded) {
    setUserWish((prevUserWish) => {
      const Wish =  prevUserWish.concat(itemAdded);
      localStorage.setItem('Wish',JSON.stringify(Wish))
      return Wish
    });
  }

  function removerWishHandler(itemId) {
    setUserWish((prevUserWish) => {
      return prevUserWish.filter((item) => item.id !== itemId);
    });
  }

  function itemInWishHandler(itemId) {
    return userWish.some((item) => item.id === itemId);
  }

  function totalAmountHandler() {
    return userCart.reduce((prev, curr) => prev + curr.price, 0);
  }

  const context = {
    itemsAdded: userCart,
    totalItemsAdded: userCart.length,
    itemsWished: userWish,
    totalItemsWished: userWish.length,
    addWish: addWishHandler,
    removeWish: removerWishHandler,
    itemInWish: itemInWishHandler,
    addItem: addItemHandler,
    removeItem: removerItemHandler,
    itemInCart: itemInCartHandler,
    totalAmount: totalAmountHandler,
    cartCheckout: checkoutHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
