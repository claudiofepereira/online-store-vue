import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
require("firebase/firestore");

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDrJZGltCcdZDKUJO2Iy3CqnPsd5OCcRNk",
    authDomain: "online-shop-c2299.firebaseapp.com",
    databaseURL: "https://online-shop-c2299.firebaseio.com",
    projectId: "online-shop-c2299",
    storageBucket: "online-shop-c2299.appspot.com",
    messagingSenderId: "737233516231",
    appId: "1:737233516231:web:0054f108ca086d118470e2",
    measurementId: "G-QJQ9JLPPVJ"
};

const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { fb, db };
