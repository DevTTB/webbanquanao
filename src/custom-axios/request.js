import axios from "axios";

export function requestGetProduct() {
    return axios.request({
        method: "get",
        url: "https://6055490ad4d9dc001726e8ec.mockapi.io/product"
    });
}
