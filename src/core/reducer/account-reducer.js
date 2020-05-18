import { account } from "../constants";
const initilaState = {
    addressList: [],
}
export default function (state = initilaState, action) {
    switch (action.type) {
        case account.FETCH_ADDRESS_LIST:
            return {
                ...state,
                addressList: action.addressList,
            }
        default:
            return { ...state }
    }
}