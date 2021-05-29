import axiosClient from "./axiosClient"

const userSigninApi = {
    post: (email, password) => {
        const url = '/users/signin'
        return axiosClient.post(url, {email, password})
    }
}
export default userSigninApi