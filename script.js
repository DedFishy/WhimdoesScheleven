var startButton = document.getElementById("start-wrapper");
var startMenu = document.getElementById("startmenu");

var showingStartMenu = false;

startButton.onclick = function() {
    showingStartMenu = !showingStartMenu;
    if (showingStartMenu) {startMenu.classList.add("startmenu-visible");}
    else {startMenu.classList.remove("startmenu-visible");}
}