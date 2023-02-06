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
    alert(event.target.id + " --- " + event.target.id.equals("start"));
    if (!["start", "startmenu", "start-wrapper"].contains(event.target.id.toString())) {
        alert(event.target.id + " --- " + event.target.id.equals("start"));
        startMenu.classList.remove("startmenu-visible");
    }
}

setInterval(function(){
    var d = new Date();

    var hours = d.getHours();

    var ampm = hours > 12 ? "PM" : "AM";
    if (hours > 12) hours -= 12;

    var minutes = d.getMinutes();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var year = d.getFullYear();

    time.innerHTML = hours + ":" + minutes + " " + ampm;
    date.innerHTML = "month + "/" + day + "/" + year";
},
1000);