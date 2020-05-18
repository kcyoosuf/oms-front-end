import apirequest from "../helpers/api/ApiRequest";
export default {
    searchProductsByQuery: (query) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5e845c94300000f3a8cf434a?q=${query}`,
            method: "GET"
        })
    }
}