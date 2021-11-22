console.log("Hi")

var CheckBoxes = document.getElementsByClassName("chkbx");

var SelectAll = document.getElementById("selall");
var SelectNone = document.getElementById("selnone");

SelectAll.addEventListener("click", function(e){
    e.preventDefault();
for(var i = 0 ; i < CheckBoxes.length; i++)
CheckBoxes[i].checked = true ;
}) ;

SelectNone.addEventListener("click", function(d){
    d.preventDefault();
for(var i = 0 ; i < CheckBoxes.length; i++)
CheckBoxes[i].checked = false ;
})
