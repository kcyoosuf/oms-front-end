import authService from "../../service/auth-service"
import { auth } from "../constants"
import { checkoutActionComplete } from "./checkout-actions";


export const login = (userId) => {
    return async dispatch => {
        const res = await authService.login(userId);
        if (res) {
            dispatch({ type: auth.LOGIN, userData: res })
            dispatch(checkoutActionComplete("login"))
        }
    }
}
