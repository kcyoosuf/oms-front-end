import productService from "../../service/product-service"
import { product } from "../constants"


export const fetchProductById = (productId) => {
    return async dispatch => {
        const res = await productService.fetchProductById(productId);
        dispatch({ type: product.FETCH_PRODUCT, product: res })
    }
}

export const fethProductsByCatgory = (category) => {
    return async dispatch => {
        const res = await productService.fethProductsByCatgory(category);
        dispatch({ type: product.FETCH_PRODUCTS_BY_CATEGORY, products: res.products, filters: res.filters })
    }
}