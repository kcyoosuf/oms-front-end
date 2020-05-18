import { auth } from "../constants";
const initilaState = {
    userData: {},
    isLoggedIn: false
}
export default function (state = initilaState, action) {
    switch (action.type) {
        case auth.LOGIN:
            return {
                ...state,
                userData: action.userData,
                isLoggedIn: true
            }
        default:
            return { ...state }
    }
}