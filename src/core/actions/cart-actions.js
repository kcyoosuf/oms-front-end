import cartService from "../../service/cart-service"
import { cart } from "../constants"


export const fetchCartByUser = (productId) => {
    return async dispatch => {
        const res = await cartService.fetchCartByUser(productId);
        dispatch({ type: cart.FETCH_CART, cartItems: res })
    }
}