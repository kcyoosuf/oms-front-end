import { checkout } from "../constants";
const initialState = {
    completedActions: [],
    selectedAddress: null,
    showAddressForm: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case checkout.CHECKOUT_ACTION_COMPLETE:
            return {
                ...state,
                completedActions: [...state.completedActions, action.checkoutAction]
            }
        case checkout.SELECT_ADDRESS:
            return {
                ...state,
                selectedAddress: action.addressId
            }
        case checkout.TOGGLE_ADDRESS_FORM:
            return {
                ...state,
                showAddressForm: !state.showAddressForm
            }
        default:
            return { ...state }
    }
}