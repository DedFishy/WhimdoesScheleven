var startButton = document.getElementById("start-wrapper");
var startMenu = document.getElementById("startmenu");

var showingStartMenu = false;

startButton.onclick = function(event) {
    showingStartMenu = !showingStartMenu;
    if (showingStartMenu) {startMenu.classList.add("startmenu-visible");}
    else {startMenu.classList.remove("startmenu-visible");}
}

document.getElementById("desktop").onclick = function(event) {
    alert("E: " + event.target.id);
    if (event.target.id != "startmenu") {
    startMenu.classList.remove("startmenu-visible");
    }
}