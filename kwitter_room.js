var firebaseConfig = {
    apiKey: "AIzaSyAfI9HfPkla9XtdWWYBybK6uUsJ7cs4gf4",
    authDomain: "letschat-25494.firebaseapp.com",
    databaseURL: "https://letschat-25494-default-rtdb.firebaseio.com",
    projectId: "letschat-25494",
    storageBucket: "letschat-25494.appspot.com",
    messagingSenderId: "169651949673",
    appId: "1:169651949673:web:15dc40f29588b4980552f8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user name"
});

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
  }

  function getData()
  {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;Room_names = childKey;
  //Start code
  console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;      
  //End code
  });});}
  getData();

  function redirectToRoomName()
  {
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
  }