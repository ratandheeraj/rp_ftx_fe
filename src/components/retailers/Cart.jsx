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
      <div className="w-2/12"></div>

      <div className="w-8/12 mt-5">
        {cart.length === 0 ? (
          <div>
            <p className="text-center pb-2 text-xl">
              Your cart is empty, add items to continue.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-center"> Total items: {cart.length}</p>
            <p className="text-center text-xl pb-2"> Amount(₹) : {totalAmt}</p>
            <div className={styles["buttonCenter"]}>
              <div>
                <Link
                  to="/retailer/checkout"
                  className="btn btn-wide btn-lg btn-accent justify-self-center"
                  // onClick={displayRazorpay}
                >
                  <button
                    onClick={handlePlaceOrder}
                    className="btn btn-primary btn-md justify-self-center"
                  >
                    Place order
                  </button>
                </Link>
                <div>
                  <button
                    onClick={() => clearCart()}
                    className="btn btn-wide  mt-2"
                  >
                    clear cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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
