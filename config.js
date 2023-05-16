const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCndGPssb0t6CiSt10O73NZALTfqjjFpP0",
  authDomain: "foodapp03-86156.firebaseapp.com",
  projectId: "foodapp03-86156",
  storageBucket: "foodapp03-86156.appspot.com",
  messagingSenderId: "104095422751",
  appId: "1:104095422751:web:8fe43b93ddaaea5913382a",
  //measurementId: "G-D1F6WT06P1"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("users");
const Category = db.collection("categories");
const Dishes = db.collection("dishes");
const Orders = db.collection("orders");
module.exports = { User, Category, Dishes, Orders };
