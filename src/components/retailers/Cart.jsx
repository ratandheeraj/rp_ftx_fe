import React from "react";
import CartItem from "./CartItem";
import styles from "../../styles/cartItem.module.css";
import { connect } from "react-redux";
import _ from "lodash";

function Cart({ cart }) {
  const totalAmt = cart.reduce((prev, curr, currIdx, Arr) => {
    return prev + curr.amount;
  }, 0);

  console.log(totalAmt);

  const handleIncrement = () => {};
  const handleDecrement = () => {};

  return (
    <div className="flex">
      <div className="w-2/12">
        <p> Total : {cart.length} items</p>
        <p> Amount: {totalAmt}</p>
      </div>
      <div>
        {cart.map((e) => (
          <CartItem
            key={e.product_id}
            product_name={e.product_name}
            product_price={e.product_price}
            quantity={e.quantity}
          />
        ))}
      </div>
      <div className="w-8/12 mt-5">
        <div className={styles["buttonCenter"]}>
          <button className="btn btn-wide btn-lg justify-self-center">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
});

export default connect(mapStateToProps, {})(Cart);
