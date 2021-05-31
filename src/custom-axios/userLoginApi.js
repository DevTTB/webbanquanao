import axiosClient from "./axiosClient"

const userLoginApi = {
    post: (email, password) => {
        const url = '/users/login'
        return axiosClient.post(url, {email, password})
    }
}
export default userLoginApi