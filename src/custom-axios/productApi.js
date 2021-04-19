import axiosClient from "./axiosClient"

const productApi = {
    getAll: (params) => {
        const url = '/product'
        return axiosClient.get(url)
    },
    get: (id) => {
        const url = `/product/${id}`
        return axiosClient.get(url)
    }
}
export default productApi