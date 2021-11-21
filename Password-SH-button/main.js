var eye = document.getElementById("eye");
var password = document.getElementById("password");
var showPassword = false;

eye.addEventListener("click", function(){
if(showPassword == false){

password.setAttribute("type", "text");
eye.classList.add("far fa-eye-slash");
eye.classList.remove("far fa-eye");
showPassword = true;
}

else{

    password.setAttribute("type", "text");
    eye.classList.remove("far fa-eye-slash");
    eye.classList.add("far fa-eye");
    showPassword = false;
}

});