import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router";

const Home = React.lazy(() => import("../pages/home"));
const Productlisting = React.lazy(() => import("../pages/productlisting"));
const Search = React.lazy(() => import("../pages/search"));
const Product = React.lazy(() => import("../pages/product"));
const Cart = React.lazy(() => import("../pages/cart"));
const Checkout = React.lazy(() => import("../pages/checkout"));

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/categories/:category" component={Productlisting} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/product/:productName/:productId" component={Product} />
      
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  </Suspense>
);
