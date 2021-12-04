import React from "react";
// import {AiOutlinePlus} from 'react-icons/fa';
import styles from "../../styles/cartItem.module.css";
import { GiMedicines as Meds } from "react-icons/gi";
import { connect } from "react-redux";
// import { addToCart, removeFromCart } from "../../redux/actions/cartAction";

function CartItem({
  product_id,
  product_name,
  product_price,
  quantity,
  handleIncrement,
  handleDecrement,
}) {
  // console.log(quantity);
  return (
    <div className="card lg:card-side bordered shadow-md py-1 mx-4">
      <figure className="self-center">
        <Meds size={96} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Product Name: {product_name}</h2>
        <div>
          Price:
          <div className="badge badge-info mx-2 badge-md">
            Rs. {product_price}
          </div>
        </div>
        <div className="mt-2">
          No of Items:
          <div className="badge mx-2 badge-warning badge-md">{quantity}</div>
        </div>
        <div>
          <button
            disabled={quantity < 1}
            className="btn mx-1 btn-primary btn-sm"
            onClick={() => handleDecrement(product_id)}
          >
            -
          </button>
          <button
            className="btn mx-1 btn-primary btn-sm"
            onClick={() => handleIncrement(product_id)}
          >
            +
          </button>
        </div>
        <div className="card-actions">
          <div className={styles["closeButton"]}>
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current text-error"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.productReducer.productsByDitributor,
});

export default connect(mapStateToProps, {})(CartItem);
