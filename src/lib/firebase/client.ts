import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD2VkX3-LG6IANcvlJlRtFr-j3QNRS2it4",
    authDomain: "karakuri-web-560ee.firebaseapp.com",
    projectId: "karakuri-web-560ee",
    storageBucket: "karakuri-web-560ee.appspot.com",
    messagingSenderId: "441912660776",
    appId: "1:441912660776:web:c6f39f7d269332c3c8761d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }