var startButton = document.getElementById("start-wrapper");
var startMenu = document.getElementById("startmenu");

var time = document.getElementById("time");
var date = document.getElementById("date");

var showingStartMenu = false;

startButton.onclick = function(event) {
    showingStartMenu = !showingStartMenu;
    if (showingStartMenu) {startMenu.classList.add("startmenu-visible");}
    else {startMenu.classList.remove("startmenu-visible");}
}

document.body.onclick = function(event) {
    alert(event.target.id);
    if (event.target.id != "startmenu") {
    startMenu.classList.remove("startmenu-visible");
    }
}

setInterval(function(){
    var date = new Date();

    var hours = date.getHours();

    var ampm = hours > 12 ? "PM" : "AM";
    if (hours > 12) hours -= 12;

    var minutes = date.getMinutes();

    time.innerHTML = hours + ":" + minutes + " " + ampm;
},
1000);