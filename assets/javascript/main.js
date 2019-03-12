 $(document).ready(function () {
     // Initialize Firebase
     var config = {
       apiKey: "AIzaSyAjnb5vwxhGm8XzF9us9btiVEuhAdQEcZ8",
       authDomain: "train-project-15186.firebaseapp.com",
       databaseURL: "https://train-project-15186.firebaseio.com",
       projectId: "train-project-15186",
       storageBucket: "train-project-15186.appspot.com",
       messagingSenderId: "1011904132529"
     };
     firebase.initializeApp(config);
     var database = firebase.database();

     //When Submit Button is Pressed, Push information to Firebase database
     $(".submit").on("click", function () {
       database.ref().push({
         name: $('.trainName').val().trim(),
         destination: $('.trainDestination').val().trim(),
         time: $('.trainTime').val().trim(),
         frequency: $('.trainFrequency').val().trim()
       });
     });





     
)};