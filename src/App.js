import React, {useState} from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header"
import Meals from "./components/meals/Meals"
import CartProvider from "./store/CartProvider";


function App() {
const [showCart, setshowCart] = useState(false);

const showCartHandler = ()=>{
  setshowCart(true);
}

const hideCartHandler = ()=>{
  setshowCart(false);
}

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
