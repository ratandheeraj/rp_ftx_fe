import React from "react";
import styles from "../styles/login.module.css";
import Input from "./common/Input";

function Login() {
  // const handleClick = (e) => {
  //   const node = document.getElementsByTagName("html");
  //   const tag = node[0];
  //   if (tag.getAttribute("data-theme") === "dark") {
  //     tag.setAttribute("data-theme", "light");
  //   } else tag.setAttribute("data-theme", "dark");
  // };
  return (
    <div className={styles["login-container"]}>
      <div className="card text-center shadow-2xl w-96">
        <div className="card-body">
          <h2 className="card-title">Login</h2> 
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label> 
            <input type="text" placeholder="name@example.com" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label> 
            <input type="password" placeholder="Enter your password" className="input input-bordered" />
          </div>
          <div className="form-control mt-3">
            <label class="cursor-pointer label">
              <span class="label-text">Distributor</span> 
              <input type="radio" name="distributor" checked="checked" class="radio" value="distributor" />
              <span class="label-text">Retailer</span> 
              <input type="radio" name="distributor" class="radio" value="retailer" />
            </label>
            
            <div className="justify-center card-actions">
              <button className="btn btn-outline btn-accent">Login</button>
            </div>
          </div>
         
        </div>
      </div> 
    </div>
  );
}

export default Login;
