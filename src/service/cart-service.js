import apirequest from "../helpers/api/ApiRequest";
export default {
    fetchCartByUser: (userId) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5ea15921320000934394b46c?userId=${userId}`,
            method: "GET"
        })
    }
}