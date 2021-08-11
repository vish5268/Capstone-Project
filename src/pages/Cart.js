import React, { useContext, useState } from "react";
import { Context } from "../Context";
import Cartitem from "../components/Cartitem";

const Cart = () => {
  const [buttonText, setButtonText] = useState("Place Order");

  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  const cartItemElements = cartItems.map((item) => (
    <Cartitem key={item.id} item={item} />
  ));

  const placeOrder = () => {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      emptyCart();
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Cart Item</h1>
      {cartItemElements}
      <p className="total-cost">Total:{totalCostDisplay} </p>

      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={placeOrder}>{buttonText}</button>
        </div>
      ) : (
        <p>You have zero items in your cart.</p>
      )}
    </main>
  );
};

export default Cart;
