 $(document).ready(function () {
     // Initialize Firebase
     var config = {
      apiKey: "AIzaSyAjnb5vwxhGm8XzF9us9btiVEuhAdQEcZ8",
      authDomain: "train-project-15186.firebaseapp.com",
      databaseURL: "https://train-project-15186.firebaseio.com",
      projectId: "train-project-15186",
      storageBucket: "train-project-15186.appspot.com",
      messagingSenderId: "1011904132529",
      appId: "1:1011904132529:web:f50c76b90d52e819"
    };

     firebase.initializeApp(config);
     var database = firebase.database();

     //When Submit Button is Pressed, Push information to Firebase database
     $(".btn").on("click", function (event) {
       event.preventDefault();
       database.ref().push({
         name: $('.trainName').val().trim(),
         destination: $('.trainDestination').val().trim(),
         time: $('.trainTime').val().trim(),
         frequency: $('.trainFrequency').val().trim()
       });
       console.log("test");
     });

     // Creating the table information
     database.ref().on('child_added', function (snapshot) {
       console.log(snapshot.val());
       var value = snapshot.val();
       //setting initial variables for calculations      
       var initialStartTime = value.time;
       var timeFrequency = value.frequency;
       console.log(initialStartTime);
       //calling function to calculate other fields
       var nextTrain = "gettingTimeTrain(initialStartTime, timeFrequency);"
       //Creates new row from child-added
       $('#table').append(
         `
          <div class="row">
              <div class="name col-md">${snapshot.val().name}</div>
              <div class="destination col-md">${snapshot.val().destination}</div>
              <div class="frequency col-md">${snapshot.val().frequency} Minutes</div>
              <div class="nextTrain col-md">${nextTrain}</div>
              <div class="timeRemaining col-md">${nextTrain} Minutes</div>
          </div>
          `
       )
     });
  });