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
    if (event.target.id != "startmenu" && event.target.id != "start") {
        alert(event.target.id);
    startMenu.classList.remove("startmenu-visible");
    }
}

setInterval(function(){
    var date = new Date();

    var hours = date.getHours();

    var ampm = hours > 12 ? "PM" : "AM";
    if (hours > 12) hours -= 12;

    var minutes = date.getMinutes();

    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();

    time.innerHTML = hours + ":" + minutes + " " + ampm;
    date.innerHTML = month + "/" + day + "/" + year;
},
1000);