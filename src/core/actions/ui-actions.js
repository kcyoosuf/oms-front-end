import uiService from "../../service/ui-service"
import { ui } from "../constants"
export const fetchCategories = () => {
    return async dispatch => {
        const res = await uiService.fetchCategories();
        dispatch({ type: ui.FETCH_CATEGORIES, categories: res.categories })
    }
}

export const fethPageComponents = (page) => {
    return async dispatch => {
        const res = await uiService.fethPageComponents(page);
        dispatch({ type: ui.FETCH_PAGE_COMPONENTS, components: res.components })
    }
}
