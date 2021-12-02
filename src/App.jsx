import React, { useEffect, lazy, Suspense } from "react";
import { verifyToken, logout } from "./redux/actions/authAction";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

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

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div> loading...</div>}>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
