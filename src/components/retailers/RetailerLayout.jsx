import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import Navbar from "../common/Navbar";
import { Redirect } from "react-router-dom";

function RetailerLayout({ children, logout, isAuthenticated, user }) {
  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (isAuthenticated) {
    if (user) {
      if (user.role !== "retailer") {
        console.log("pass");
        return <Redirect to="/login" />;
      }
    }
  }

  console.log("test");

  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { logout })(RetailerLayout);
