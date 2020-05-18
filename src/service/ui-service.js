import apirequest from "../helpers/api/ApiRequest";
export default {
    fetchCategories: () => {
        return apirequest({
            url: "http://www.mocky.io/v2/5e2e7545310000650070ffe6",
            method: "GET"
        })
    },
    fethPageComponents: (page) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5e3006ae32000058008586d1?page=${page}`,
            method: "GET"
        })
    }
}