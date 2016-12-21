// Initialize Firebase
var config = {
    apiKey: "AIzaSyDvbEnpxzP6TuRAo6pkzkWF6oXYV0i6NWk",
    authDomain: "fir-auth-37950.firebaseapp.com",
    databaseURL: "https://fir-auth-37950.firebaseio.com",
    storageBucket: "fir-auth-37950.appspot.com",
    messagingSenderId: "829410255727"
};
firebase.initializeApp(config);
//Initialize Firebase end
//
//Module declaration
angular.module("sampleApp", ["firebase"]);


