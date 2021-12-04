import React, { useEffect } from "react";
import CartItem from "./CartItem";
import styles from "../../styles/cartItem.module.css";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/actions/cartAction";
import { createOrder } from "../../redux/actions/razorpayAction";
import { fetchAllDistributors } from "../../redux/actions/distributorAction";

function Cart({
  cart,
  clearCart,
  createOrder,
  distributors,
  user,
  fetchAllDistributors,
}) {
  const totalAmt = cart.reduce((prev, curr, currIdx, Arr) => {
    return prev + curr.amount;
  }, 0);

  // console.log(user, distributors);

  console.log(cart);

  // console.log(totalAmt);

  useEffect(() => {
    fetchAllDistributors();
  }, []);

  const handleIncrement = () => {};
  const handleDecrement = () => {};

  const handlePlaceOrder = () => {
    createOrder({
      cart,
      order_amount: totalAmt,
      distributor_id: distributors[0].distributor_id,
      client_id: user.retailer_id,
    });
  };

  return (
    <div>
      <div className="w-2/12">
        <p> Total : {cart.length} items</p>
        <p> Amount: {totalAmt}</p>
      </div>

      <div className="w-8/12 mt-5">
        <div className={styles["buttonCenter"]}>
          <Link
            to="/retailer/checkout"

            // onClick={displayRazorpay}
          >
            <button
              onClick={handlePlaceOrder}
              className="btn btn-primary btn-md justify-self-center"
            >
              Place order
            </button>
          </Link>
          <button
            onClick={() => clearCart()}
            className="btn btn-secondary btn-md ml-5"
          >
            clear cart
          </button>
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        {cart.map((e) => (
          <CartItem
            key={e.product_id}
            product_name={e.product_name}
            product_price={e.product_price}
            quantity={e.quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  distributors: state.distReducer.distributors,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, {
  clearCart,
  createOrder,
  fetchAllDistributors,
})(Cart);
