// setTimeout(logoutUser,5000);

// function logoutUser(){
//     window.location = "logout.html" ;
// }

var timer = document.getElementById("timer");
var duration = 5; //duration set to 5 seconds

setInterval(updateTimer, 1000);

function updateTimer(){
    duration--;
    if(duration < 1){
        window.location = "logout.html" ;
    } else{
        timer.innerText = duration;

    }

}

window.addEventListener("mousemove", resetTimer);

function resetTimer(){
    duration = 5;
}