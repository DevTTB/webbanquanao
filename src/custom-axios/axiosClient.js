import axios from 'axios';
import queryString from 'query-string';
import firebase from 'firebase';

const getFireBaseToken = async () => {
    const currentUser = firebase.auth().currentUser
    if (currentUser) return currentUser.getIdToken()

    const hasRememberAccount = localStorage.getItem('firebaseui:rememberedAccounts')
    if (!hasRememberAccount) return null

    return new Promise((resolve, reject) => {
        const waitTimer = setTimeout(() => {
            reject(null)
            console.log('time out')
        }, 10000)
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                reject(null)
            }
            const token = await user.getIdToken()
            console.log('axios-logged in user token,', token)
            resolve(token)

            unregisterAuthObserver()
            clearTimeout(waitTimer)
        })
    })
}

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL_API || 'https://6055490ad4d9dc001726e8ec.mockapi.io',
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // const currentUser = firebase.auth().currentUser;
    // if (currentUser) {
    //     const token = await currentUser.getIdToken();
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    const token = await getFireBaseToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});
export default axiosClient;