import { checkout } from "../constants"
export const checkoutActionComplete = (checkoutAction) => {
    return dispatch => {
        dispatch({ type: checkout.CHECKOUT_ACTION_COMPLETE, checkoutAction })
    }
}

export const toggleAddressForm = () => {
    return { type: checkout.TOGGLE_ADDRESS_FORM }
}
export const selectAddress = (addressId) => {
    return { type: checkout.SELECT_ADDRESS, addressId }
}