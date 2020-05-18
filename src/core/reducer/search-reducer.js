import { search } from "../constants";
const initilaState = {
    categories: [],
    products: [],
}
export default function (state = initilaState, action) {
    switch (action.type) {
        case search.SEARCH_BY_QUERY:
            return {
                ...state,
                products: action.products,
                categories: action.categories
            }
        default:
            return { ...state }
    }
}