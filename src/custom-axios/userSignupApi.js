import axiosClient from "./axiosClient"

const userSignupApi = {
    post: (name, email, password) => {
        const url = '/users/signup'
        return axiosClient.post(url, {name, email, password})
    }
}
export default userSignupApi