import React, { useEffect } from "react";
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

  // import { createRazorpayOrder } from "../../redux/actions/razorpayAction";

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
          <button
            className="btn btn-wide btn-lg justify-self-center"
            // onClick={displayRazorpay}
          >
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
