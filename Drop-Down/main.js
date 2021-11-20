var nav = document.getElementById("nav");

nav.addEventListener("change",function(){
    window.open(nav.value,"_self");
console.log(nav.value);

});