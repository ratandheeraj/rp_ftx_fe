import React from "react";
import { connect } from "react-redux";

export const ProductForm = (props) => {
  return (
    <div>
      <p>this is product form</p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
