function sidenVises() {
    console.log("sidenVises");
    //nulstil alting

    //-> showstart
    showStart();

}

function showStart() {
    console.log("showStart");
    //vis startskærm

    document.querySelector("#start").classList.add("show");
    //start animation på start-knap
    document.querySelector("#play").classList.add("pulse");
    //play pulserer
    document.querySelector("#start_settings").classList.add("show");
    //vis settings

    document.querySelector("#play").addEventListener("click", hideStart);
    //klik på play og spillet starter
    document.querySelector("#start_settings").addEventListener("click", showSettings);
    //klik på settings og vis
}

function showSettings() {
    document.querySelector("#settings").classList.add("show");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settings").addEventListener("click", hideSettings);
}

function hideSettings() {
    document.querySelector("#settings").classList.remove("show")
}

function hideStart() {
    console.log("hideStart");
    //Stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");
    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");
    //hide settings
    document.querySelector("#settings").classList.remove("show");

    //Når fade animationen er færdig -> startGame
    document.querySelector("#game_background").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("StartGame");
    //skjul startskærm
    document.querySelector("#start").classList.add("hide");
    //vid spilskærm
    document.querySelector("#game_background").classList.add("show");
}
