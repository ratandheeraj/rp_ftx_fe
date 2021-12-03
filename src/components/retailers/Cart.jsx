import React from "react";
import CartItem from "./CartItem";
import styles from "../../styles/cartItem.module.css";

function Cart() {
  return (
    <div className="flex">
      <div className="w-2/12"></div>
      <div className="w-8/12 mt-5">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className={styles["buttonCenter"]}>
          <button className="btn btn-wide btn-lg justify-self-center">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
