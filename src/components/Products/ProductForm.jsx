import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

export const ProductForm = ({ distributor_id }) => {
  const [formData, setFormData] = useState({
    product_name: "",
    product_price: "",
    number_in_stock: "",
    distributor_id: distributor_id,
  });

  const { product_name, product_price, number_in_stock } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-1/3">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="product name"
            className="input input-bordered"
            id="product_name"
            value={product_name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="number"
            placeholder="product name"
            className="input input-bordered"
            id="product_price"
            value={product_price}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Number in stock</span>
          </label>
          <input
            type="number"
            placeholder="product name"
            className="input input-bordered"
            id="number_in_stock"
            value={number_in_stock}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-secondary mt-3">
          create
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  distributor_id: state.authReducer.user.distributor_id,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
