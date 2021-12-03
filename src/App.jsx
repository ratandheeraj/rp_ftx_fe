import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { verifyToken, logout } from "./redux/actions/authAction";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { themeChange } from "theme-change";
import store from "./redux/store";
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import RetailerHome from "./components/retailers/RetailerHome";
import ProductPage from "./components/retailers/ProductPage";

const Login = lazy(() => import("./components/Login"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.token;
      store.dispatch(verifyToken(token));
    }
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch(logout());
    });
  }, []);

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <ToastContainer />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/retailer-home" component={RetailerHome} />
            <Route exact path="/product-page" component={ProductPage} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
