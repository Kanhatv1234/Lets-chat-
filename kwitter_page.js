//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyABHwKkvKAtIe59HOBIR6CYQzmRn_k_-2E",
      authDomain: "activity-94--0--0.firebaseapp.com",
      databaseURL: "https://activity-94--0--0-default-rtdb.firebaseio.com",
      projectId: "activity-94--0--0",
      storageBucket: "activity-94--0--0.appspot.com",
      messagingSenderId: "638444707961",
      appId: "1:638444707961:web:7e3981f19b5a7e0b98b4a8",
      measurementId: "G-Z022LDSY2T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      
      document.getElementById("msg").value = "";
      
}
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      }

