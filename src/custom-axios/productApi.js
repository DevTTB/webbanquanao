import axiosClient from "./axiosClient"

const productApi = {
    getAll: () => {
        const url = '/products'
        return axiosClient.get(url)
    },
    getById: (id) => {
        const url = `/products/${id}`
        return axiosClient.get(url)
    },
    post: () => {
        const url = `/products/`
        return axiosClient.port(url)
    }
}
export default productApi