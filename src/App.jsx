import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { verifyToken, logout, loadUser } from "./redux/actions/authAction";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { themeChange } from "theme-change";
import store from "./redux/store";
import Loader from "./components/common/Loader";
import DistributorLayout from "./components/Distributors/DistributorLayout";
import Navbar from "./components/common/Navbar";
import RetailerHome from "./components/retailers/RetailerHome";
import ProductPage from "./components/retailers/ProductPage";
import Products from "./components/Products/Products";
import RetailerLayout from "./components/retailers/RetailerLayout";
import decoder from "jwt-decode";
import ProductForm from "./components/Products/ProductForm";
import ProductDetailView from "./components/retailers/ProductDetailView";
import Cart from "./components/retailers/Cart";

const Login = lazy(() => import("./components/Login"));
const Landing = lazy(() => import("./components/Landing"));

function App({ isAuthenticated, user }) {
  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.getItem("token");
      console.log(token);
      store.dispatch(verifyToken(token));
      console.log("ran in app.js");
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
          </Switch>
          <Switch>
            <Route path="/retailer">
              <RetailerLayout>
                <Route exact path="/retailer-home" component={RetailerHome} />
                <Route exact path="/product-page" component={ProductPage} />
              </RetailerLayout>
            </Route>
          </Switch>
          <Switch>
            <Route path="/distributor">
              <DistributorLayout>
                <Route path="/distributor/products">
                  <Products />
                </Route>
                <Route path="/distributor/product-form">
                  <ProductForm />
                </Route>
              </DistributorLayout>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
