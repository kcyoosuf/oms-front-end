import apirequest from "../helpers/api/ApiRequest";
export default {
    fetchProductById: (productId) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5ea157a9320000384494b44a?productId=${productId}`,
            method: "GET"
        })
    },
    fethProductsByCatgory: (category) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5ea155c9320000934394b435?category=${category}`,
            method: "GET"
        })
    }
}