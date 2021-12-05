import React, { useEffect } from "react";
import CartItem from "./CartItem";
import styles from "../../styles/cartItem.module.css";
import { connect } from "react-redux";
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
  console.log(totalAmt);

  const handleIncrement = () => {};
  const handleDecrement = () => {};

  // import { createRazorpayOrder } from "../../redux/actions/razorpayAction";
  useEffect(() => {
    fetchAllDistributors();
  }, []);
  // function loadRazorpay(src){
  //     return new Promise((resolve)=>{
  //         const script = document.createElement('script');
  //         script.src = src;
  //         script.onload= ()=>{
  //             resolve(true);
  //         }
  //         script.onerror = ()=>{
  //             resolve(false)
  //         }
  //         document.body.appendChild(script);
  //     })
  // }
  // {
  //   apiKey,
  //   amount,
  //   order_id,
  //   retailer_name,
  //   retailer_email,
  //   distributor_name,
  //   createRazorpayOrder
  //   }
  const handlePlaceOrder = () => {
    createOrder({
      cart,
      order_amount: totalAmt,
      distributor_id: distributors[0].distributor_id,
      client_id: user.retailer_id,
    });
  };
  //change these
  //     const reqObject = {
  //         amount:"50000",
  //         distributor_id:"d2c0ea6f-183c-4973-b3db-0602d360d8c2",
  //         retailer_id:"d2c0ea6f-183c-4973-b3db-0602d360d8c2"
  //     }
  // useEffect(() => {
  //     createRazorpayOrder(reqObject);
  //   }, []);
  //   console.log(order_id);
  // async function displayRazorpay(){
  //     const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
  //     if(!res){
  //         alert("Razorpay Failed to load");
  //         return;
  //     }
  //     let options = {
  //         "key": apiKey,
  //         "amount": amount,
  //         "currency": "INR",
  //         "name": distributor_name,
  //         "description": "Test Transaction",
  //         "image": "https://example.com/your_logo",
  //         "order_id": order_id,
  //         "handler": function (response){
  //             alert(response.razorpay_payment_id);
  //             alert(response.razorpay_order_id);
  //             alert(response.razorpay_signature)
  //         },
  //         "prefill": {
  //             "name": retailer_name,
  //             "email": retailer_email,
  //             "contact": "9999999999"
  //         },
  //         "notes": {
  //             "address": "Razorpay Corporate Office"
  //         },
  //         "theme": {
  //             "color": "#3399cc"
  //         }
  //     };
  //     let paymentObject = new Razorpay(options);
  //     paymentObject.open();
  //     rzp1.on('payment.failed', function (response){
  //             alert(response.error.code);
  //             alert(response.error.description);
  //             alert(response.error.source);
  //             alert(response.error.step);
  //             alert(response.error.reason);
  //             alert(response.error.metadata.order_id);
  //             alert(response.error.metadata.payment_id);
  //     });
  // }
  return (
    <div className="flex">
      <div className="w-2/12"></div>
      <div className="w-10/12">
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
      {/* <div className="w-6/12">
       
       </div> */}
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
                    className="btn btn-accent btn-md justify-self-center"
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
      {/* <div className="flex flex-wrap w-full">
       
      </div> */}
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
