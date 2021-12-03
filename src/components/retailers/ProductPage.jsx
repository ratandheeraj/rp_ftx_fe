import React from "react";
import styles from "../../styles/productPage.module.css";
import Navbar from "../common/Navbar";
import ProductCard from "./ProductCard";
function ProductPage(){
    return(
        <div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
}

export default ProductPage;