import apirequest from "../helpers/api/ApiRequest";
export default {
    fetchAddressListByUser: (userId) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5ea2c8c04f00005b00d9f49d?userId=${userId}`,
            method: "GET"
        })

    },
    saveAddress: (address) => {
        return apirequest({
            url: `http://www.mocky.io/v2/5eaa84752d000055002686be`,
            method: "GET"
        })
    }
}