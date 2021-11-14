console.log("Hi!");

setInterval(updateClock, 1000);

function updateClock(){
    var my_date = new Date();
    var my_hours = my_date.getHours();
    var my_minutes = my_date.getMinutes();
    var my_seconds = my_date.getSeconds();

if (my_hours <10 ) { my_hours = "0" + my_hours ; }
if (my_minutes <10 ) { my_minutes = "0" + my_minutes ; }
if (my_seconds <10 ) { my_seconds = "0" + my_seconds ; }
 
var My_clock = my_hours + ":" + my_minutes + ":" + my_seconds ;
document.getElementById("clock").innerText = My_clock ;

}