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
import Sales from "./components/Distributors/Sales";
import DistProducts from "./components/retailers/DistProducts";
import Checkout from "./components/retailers/Checkout";
import Registration from "./components/Registration";

const Login = lazy(() => import("./components/Login"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  useEffect(() => {
    if (localStorage.token) {
      const token = localStorage.getItem("token");
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
            <Route exact path="/register" component={Registration} />
            {/* <Route exact path="/checkout" component={Checkout} /> */}
          </Switch>
          <Switch>
            <Route path="/retailer">
              <RetailerLayout>
                <Route
                  exact
                  path="/retailer/retailer-home"
                  component={RetailerHome}
                />
                <Route path="/retailer/checkout" component={Checkout} />

                <Route exact path="/retailer/cart" component={Cart} />
                <Route path="/retailer/products">
                  <DistProducts />
                </Route>
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
                <Route path="/distributor/sales">
                  <Sales />
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
