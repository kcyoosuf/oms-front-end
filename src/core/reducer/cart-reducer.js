import { cart } from "../constants";
const initilaState = {
    cartItems: [],
}
export default function (state = initilaState, action) {
    switch (action.type) {
        case cart.FETCH_CART:
            return {
                ...state,
                cartItems: action.cartItems
            }
        default:
            return { ...state }
    }
}