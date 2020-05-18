import { product } from "../constants";
const initilaState = {
    product: null,
    products: [],
    filters: []
}
export default function (state = initilaState, action) {
    switch (action.type) {
        case product.FETCH_PRODUCT:
            return {
                ...state,
                product: action.product
            }
        case product.FETCH_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                products: action.products,
                filters: action.filters
            }
        default:
            return { ...state }
    }
}