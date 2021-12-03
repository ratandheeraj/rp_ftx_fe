import React from "react";
import styles from "../styles/login.module.css";
import Input from "./common/Input";

function Login() {
  return (
    <div className={styles["login-container"]}>
      <div className="card bordered">
        <div className="card-title">Login</div>
        <div className="card-body">
          <Input
            size={50}
            placeholder="email"
            id="email"
            name="email"
            className="input input-secondary input-bordered"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
