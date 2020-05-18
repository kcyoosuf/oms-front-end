import searchService from "../../service/search-service"
import { search } from "../constants"


export const searchProductsByQuery = (query) => {
    return async dispatch => {
        const res = await searchService.searchProductsByQuery(query);
        dispatch({ type: search.SEARCH_BY_QUERY, products: res.products, categories: res.categories })
    }
}