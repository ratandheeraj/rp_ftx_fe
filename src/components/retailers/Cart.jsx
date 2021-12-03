import React from "react";
import CartItem from "./CartItem";
import styles from '../../styles/cartItem.module.css';

function loadRazorpay(){
    return new Promise((resolve)=>{
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        document.appendChild(script);
        script.onload= ()=>{
            resolve(true);
        }
        script.onerror = ()=>{
            resolve(false)
        }
    })
    
}

function Cart(){
    async function displayRazorpay(){
        const res = await loadRazorpay();
        if(!res){
            alert("Razorpay Failed to load");
            return;
        }
        var options = {
            "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "order_DBJOWzybf0sJbb", //This is a sample Order ID. Pass the `id` obtained in the previous step
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
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

  
    return(
        <div className="flex">
            <div className="w-2/12"></div>
            <div className="w-8/12 mt-5">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <div className={styles['buttonCenter']}>
                    <button class="btn btn-wide btn-lg justify-self-center">Checkout</button> 
                </div>
                
            </div>
        </div>
    );
}

export default Cart;