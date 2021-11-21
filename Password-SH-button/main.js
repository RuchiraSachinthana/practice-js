var eye = document.getElementById("eye");
var password = document.getElementById("password");

eye.addEventListener("click", function(){
password.setAttribute("type", "text");
eye.classList.add("far fa-eye-slash");
eye.classList.remove("far fa-eye");


});