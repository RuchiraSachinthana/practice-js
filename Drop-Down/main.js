var nav = document.getElementById("nav");

nav.addEventListener("change",function(){
    window.open(nav.value, "mywinndow", "width=300, height=200");
console.log(nav.value);

});