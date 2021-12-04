import React,{ useEffect } from "react";
import CartItem from "./CartItem";
import styles from "../../styles/cartItem.module.css";
import { connect } from "react-redux";
import { createRazorpayOrder } from "../../redux/actions/razorpayAction";

function loadRazorpay(src){
    return new Promise((resolve)=>{
        const script = document.createElement('script');
        script.src = src;
        script.onload= ()=>{
            resolve(true);
        }
        script.onerror = ()=>{
            resolve(false)
        }
        document.body.appendChild(script);
    })
}

function Checkout({
    apiKey,
    amount,
    order_id,
    retailer_name,
    retailer_email,
    distributor_name,
    createRazorpayOrder
    }){
        //change these
        const reqObject = {
            amount:"50000",
            distributor_id:"d2c0ea6f-183c-4973-b3db-0602d360d8c2",
            retailer_id:"d2c0ea6f-183c-4973-b3db-0602d360d8c2"
        }
    useEffect(() => {
        createRazorpayOrder(reqObject);
      }, []);
      console.log(order_id);
    async function displayRazorpay(){
        const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
        if(!res){
            alert("Razorpay Failed to load");
            return;
        }
        let options = {
            "key": apiKey,
            "amount": amount, 
            "currency": "INR",
            "name": distributor_name,
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order_id,
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": retailer_name,
                "email": retailer_email,
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        let paymentObject = new Razorpay(options);
        paymentObject.open();
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
    }
  return (
    <div>
        <h1 className="text-center text-4xl pt-4">Order Summary</h1>
        {/* <div className="flex">
      <div className="w-2/12"></div>
      <div className="w-8/12 mt-5">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className={styles["buttonCenter"]}>
          <button className="btn btn-wide btn-lg justify-self-center" onClick={displayRazorpay}>
            Pay
          </button>
        </div>
      </div>
    </div> */}
    <div className="flex justify-center pt-4 mt-5 bordered drop-shadow-md">
        <div className="overflow-x-auto">
          <table className="table w-full drop-shadow-md border-solid">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>Product 1</td>
                <td>200</td>
                <td>2</td>
                <td>400</td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Product 2</td>
                <td>400</td>
                <td>4</td>
                <td>1600</td>
              </tr>
              <tr className="hover">
                <th>3</th>
                <td>Product 3</td>
                <td>200</td>
                <td>1</td>
                <td>200</td>
              </tr>
              <tr className="hover">
                <th>4</th>
                <td>Product 4</td>
                <td>100</td>
                <td>2</td>
                <td>200</td>
              </tr>
            </tbody>
           
          </table>
          <div className="grid justify-items-end">
          <h2 className="pr-4 text-md">Total: 2400</h2>
          </div>
        
        </div>
       
      </div>
      <div className={styles["buttonCenter"]}>
          <button className="btn btn-wide btn-md justify-self-center" onClick={displayRazorpay}>
            Pay
          </button>
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
    apiKey: state.razorpayReducer.apiKey,
    amount: state.razorpayReducer.amount,
    order_id: state.razorpayReducer.order_id,
    retailer_name: state.razorpayReducer.retailer_name,
    retailer_email: state.razorpayReducer.retailer_email,
    distributor_name: state.razorpayReducer.distributor_name,
  });
  
export default connect(mapStateToProps, { createRazorpayOrder })(Checkout);
