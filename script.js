window.addEventListener("load", sidenVises);




let showSettingsEffektSound = true;
let showSettingsMusic = true;

function sidenVises() {
    console.log("sidenVises");
    //nulstil alting

    //document.querySelector("#play_again").classList.add("show")

    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");


    //-> showstart
    showStart();

}

function showStart() {
    console.log("showStart");
    //vis startskærm

    document.querySelector("#start").classList.remove("hide");
    //start animation på start-knap
    document.querySelector("#play").classList.add("pulse");
    //play pulserer
    document.querySelector("#start_settings").classList.add("show");
    //vis settings

    document.querySelector("#play").addEventListener("click", hideStart);
    //klik på play og spillet starter
    document.querySelector("#start_settings").addEventListener("click", showSettings);
    //klik på settings og vis




document.querySelector("#musik").play();

}

function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings").classList.remove("hide");
    //document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#kryds").addEventListener("click", hideSettings);
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);

    document.querySelector("#setting_music").addEventListener("click", toggleMusic);
}

function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings").classList.add("hide");
}

function toggleSounds(){
    console.log("toggleSounds");

    if (showSettingsEffektSound == false) {
        showSettingsEffektSound = true;

        document.querySelector("#sfx_sprite").classList.add("off_on");

        document.querySelector("#sfx_sprite").classList.remove("off");
         document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);
    } else {
        showSettingsEffektSound = false;

        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff);

    }
}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#yay").muted = true;
    document.querySelector("#autch").muted = true;
}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#yay").muted = false;
    document.querySelector("#autch").muted = false;
}

function toggleMusic(){
    console.log("showSettingsMusic function " + showSettingsMusic);

    if (showSettingsMusic == false) {
        showSettingsMusic = true;
         document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
    }else {
        showSettingsMusic = false;
         document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
    }
}

function musicOff(){
    console.log("musicOff function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    document.querySelector("#musik").pause();
}

function musicOn(){
    console.log("musicOn function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    document.querySelector("#musik").play();
}

function hideStart() {
    console.log("hideStart");
    //Stop animation på start-knap
    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    //hide settings


    //fade startskærm ud

    //Når fade animationen er færdig ->startGame
    document.querySelector("#start").classList.remove("show");
    document.querySelector("#start").addEventListener("animationend", startGame);


}

function startGame() {
    console.log("StartGame");
    //skjul startskærm

    //vid spilskærm
    document.querySelector("#start").classList = "hide"; document.querySelector("#game_background").classList.add("show");

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

    if (this.classList.contains("butterflyblue_fly")) {
        document.querySelector("#yay").currentTime = 0;
        document.querySelector("#yay").play();
        }
        if (this.classList.contains("butterflyorange_fly")) {
        document.querySelector("#yay").currentTime = 0;
        document.querySelector("#yay").play();

           }
 //Hvordan får jeg figurerne til at starte igen?

          //console.log(this);
        //this.classList.add("hide");
    //this.addEventListener("animationend", butterflyForfra);

}

function butterflyForfra(){
   // console.log("butterflyForfra");
  //  console.log(this);
  //  this.classList.add("show");
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

    if (this.classList.contains("angrybee_fly")) {
        document.querySelector("#autch").currentTime = 0;
        document.querySelector("#autch").play();
        }
        if (this.classList.contains("fatbee_fly")) {
        document.querySelector("#autch").currentTime = 0;
        document.querySelector("#autch").play();

 }

 }

function gameStatus() {
    if (point < 1) {
        gameOver();
    }
    if (liv < 1) {
        gameOver();
    }

    if (point > 4) {
        levelComplete();
    }
}

function gameOver() {
    console.log("gameOver");

    document.querySelector("#gameover").classList.remove("hide");

    document.querySelector("#retry").addEventListener("click", sidenVises);


}

function levelComplete() {
    console.log("levelComplete");

    document.querySelector("#levelcomplete").classList.remove("hide");

    document.querySelector("#play_again").addEventListener("click", sidenVises);
}
