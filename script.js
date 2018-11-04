window.addEventListener("load", sidenVises);

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
    console.log("showSettings");
    document.querySelector("#settings").classList.add("show");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#kryds").addEventListener("click", hideSettings);
}

function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings").classList.remove("show");
}

function hideStart() {
    console.log("hideStart");
    //Stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");

    //hide settings


    //fade startskærm ud
    document.querySelector("#start").classList.add("fade_out");
    //Når fade animationen er færdig ->startGame
    document.querySelector("#start").classList.remove("show");
    document.querySelector("#start").addEventListener("animationend", startGame);


}

function startGame() {
    console.log("StartGame");
    //skjul startskærm

    //vid spilskærm
    document.querySelector("#game_background").classList.add("show");

    document.querySelector("#butterflyblue").addEventListener("click", clickButterfly);
    document.querySelector("#butterflyorange").addEventListener("click", clickButterfly);
    document.querySelector("#angrybee").addEventListener("click", clickBee);
    document.querySelector("#fatbee").addEventListener("click", clickBee);
}

let point = 0;

function clickButterfly() {
    console.log("clickButterfly");
    point++;
    console.log(point);

    document.querySelector(".antal").textContent = point;
    gameStatus();
}
let liv = 3;

function clickBee() {
    console.log("clickBee");

    let heart = "#heart" + liv;

    document.querySelector(heart).classList.add("dissappear");
    console.log("#heart" + liv);
    liv--;
    console.log(liv);
    point--;
    console.log(point);
    document.querySelector(".antal").textContent = point;

    gameStatus();
}

function gameStatus() {
    if (point < 0) {
        gameOver();
    }
    if (liv < 0) {
        gameOver();
    }

    if (point > 5) {
        levelComplete();
    }
}

function gameOver() {
    console.log("gameOver");

    document.querySelector("#gameover").classList.add("show");

    document.querySelector("#retry").addEventListener("click", sidenVises);

}

function levelComplete() {
    console.log("levelComplete");

    document.querySelector("#levelcomplete").classList.add("show");

    document.querySelector("#play_again").addEventListener("click", sidenVises);
}
