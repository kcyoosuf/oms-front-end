import { ui } from "../constants";
const initilaState = {
    categories: [],
    components: []
}
export default function (state = initilaState, action) {
    switch (action.type) {
        case ui.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        case ui.FETCH_PAGE_COMPONENTS:
            return {
                ...state,
                components: action.components,
            }
        default:
            return { ...state }
    }
}