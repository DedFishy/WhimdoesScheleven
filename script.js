var startButton = document.getElementById("start-wrapper");
var startMenu = document.getElementById("startmenu");

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