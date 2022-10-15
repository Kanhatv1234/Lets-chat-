function login() {
    user_name = document.getElementById("user_login_name").value;
  localStorage.setItem("user_name",  user_name);
  window.location = "kwitter_room.html";
}
