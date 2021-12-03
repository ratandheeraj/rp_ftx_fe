import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1>This is landing page</h1>
      <Link className="btn btn-primary" to="/login">
        go to login page
      </Link>
    </div>
  );
}

export default Landing;
