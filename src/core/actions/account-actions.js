import accountService from "../../service/account-service"
import { account } from "../constants"
import { toggleAddressForm } from "./checkout-actions";


export const fetchAddressListByUser = (userId) => {
    return async dispatch => {
        const res = await accountService.fetchAddressListByUser(userId);
        dispatch({ type: account.FETCH_ADDRESS_LIST, addressList: res })
    }
}

export const saveAddress = (address) => {
    return async dispatch => {
        const res = await accountService.saveAddress(address);
        if (res.status) {
            dispatch(toggleAddressForm())
        }
    }
}