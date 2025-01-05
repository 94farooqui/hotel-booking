import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRE2Vj4eFKFetq52YwFcTcea5YxArp368",
  authDomain: "hotel-booking-39008.firebaseapp.com",
  projectId: "hotel-booking-39008",
  storageBucket: "hotel-booking-39008.firebasestorage.app",
  messagingSenderId: "13066372155",
  appId: "1:13066372155:web:3a0e06290b7b5ed125481e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };