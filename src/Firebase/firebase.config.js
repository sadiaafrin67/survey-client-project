// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBTcWMWGmoLa3tH-OxKboBxBFAV-7xhhuk",
//   authDomain: "survey-nest-project.firebaseapp.com",
//   projectId: "survey-nest-project",
//   storageBucket: "survey-nest-project.appspot.com",
//   messagingSenderId: "582011779669",
//   appId: "1:582011779669:web:90adf69ee568058e5532dc"
// };

const firebaseConfig = {
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
    messagingSenderId:import.meta.env.VITE_messagingSenderId,
    appId:import.meta.env.VITE_appId,
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app