import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

function Landing({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>This is landing page</h1>
      <Link className="btn btn-primary" to="/login">
        go to login page
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, {})(Landing);
