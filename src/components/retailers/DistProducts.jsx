import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import CartItem from "./CartItem";

function DistProducts({ productsByDist: products, addToCart }) {
  console.log(products);

  //   const newProducts = products.map((p) => {
  //     return {
  //       ...p,
  //       quantity: 0,
  //       amount: 0,
  //     };
  //   });

  //   const [cart, setCart] = useState(newProducts);

  //   const handleIncrement = (id) => {
  //     // console.log(id);
  //     let newCart = [...cart];
  //     let item = newCart.filter((e) => e.product_id === id);
  //     item[0].quantity++;
  //     item[0].amount = item[0].quantity * item[0].product_price;
  //     const index = newCart.findIndex((e) => e.product_id === id);
  //     newCart[index] = item[0];
  //     console.log(newCart);
  //     setCart(newCart);
  //   };

  //   const handleDecrement = (id) => {
  //     // console.log(id);
  //     let newCart = [...cart];
  //     let item = newCart.filter((e) => e.product_id === id);
  //     item[0].quantity--;
  //     item[0].amount = item[0].quantity * item[0].product_price;
  //     const index = newCart.findIndex((e) => e.product_id === id);
  //     newCart[index] = item[0];
  //     console.log(newCart);
  //     setCart(newCart);
  //   };

  const handleAddItems = () => {
    // const _cart = cart.filter((e) => e.amount > 0);
    // addToCart(_cart);
  };

  return (
    <div>
      <p>products</p>
      <div>
        {products.map((p) => {
          return (
            <CartItem
              key={p.product_id}
              product_id={p.product_id}
              product_name={p.product_name}
              product_price={p.product_price}
              quantity={p.quantity}
            />
          );
        })}
      </div>
      <div>
        <button onClick={handleAddItems} className="btn btn-primary">
          Add items to cart
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productsByDist: state.productReducer.productsByDistributor,
});

export default connect(mapStateToProps, { addToCart })(DistProducts);
