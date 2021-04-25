import firebase from 'firebase'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAHBBgOuvBwxyKUVMr_E8smUc34Ec-w4JA",
    authDomain: "webbanquanao-1999.firebaseapp.com",
    projectId: "webbanquanao-1999",
    storageBucket: "webbanquanao-1999.appspot.com",
    messagingSenderId: "315205549683",
    appId: "1:315205549683:web:82212073c9553864c13406",
    measurementId: "G-Y8Q7Z15ZXF"
})

export const auth = app.auth()
export default app