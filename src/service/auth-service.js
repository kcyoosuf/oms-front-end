


import apirequest from "../helpers/api/ApiRequest";
export default {
    login: (data) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5ea2e3694f00006e00d9f597?data=${data}`,
            method: "GET"
        })
    }
}