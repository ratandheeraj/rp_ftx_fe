import React, { useEffect } from "react";
import styles from "../../styles/product.module.css";
import { connect } from "react-redux";
import ProductCard from "../retailers/ProductCard";
import { Link } from "react-router-dom";

export const Products = ({ isAuthenticated, isDistributor }) => {
  return (
    <div>
      <div className="container">
        <Link className="btn btn-primary" to="/distributor/product-form">
          Create a Product
        </Link>
      </div>
      <div className={styles["product-container"]}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  isDistributor: state.authReducer.user.isDistributor,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
