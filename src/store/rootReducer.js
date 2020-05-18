import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ui from "../core/reducer/ui-reducer"
import search from "../core/reducer/search-reducer"
import product from "../core/reducer/product-reducer"
import cart from "../core/reducer/cart-reducer"
import checkout from "../core/reducer/checkout-reducer"
import account from "../core/reducer/account-reducer"
import auth from "../core/reducer/auth-reducer"

export default history =>
    combineReducers({
        router: connectRouter(history),
        ui,
        search,
        product,
        cart,
        checkout,
        account,
        auth
    });
