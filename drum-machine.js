/* Drum Machine */

// Still To DO

// 3. use JSON file



const tuneStyleOne = [
    {keyCode: 81, keyPad: "Q", titleTune: "Heater-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
    {keyCode: 87, keyPad: "W", titleTune: "Heater-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {keyCode: 69, keyPad: "E", titleTune: "Heater-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {keyCode: 65, keyPad: "A", titleTune: "Heater-4", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {keyCode: 83, keyPad: "S", titleTune: "Clap", url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {keyCode: 68, keyPad: "D", titleTune: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {keyCode: 90, keyPad: "Z", titleTune: "Kick-n'-Hat", url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {keyCode: 88, keyPad: "X", titleTune: "Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {keyCode: 67, keyPad: "C", titleTune: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
];

const tuneStyleTwo = [
    {keyCode: 81, keyPad: "Q", titleTune: "Chord-1", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},
    {keyCode: 87, keyPad: "W", titleTune: "Chord-2", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},
    {keyCode: 69, keyPad: "E", titleTune: "Chord-3", url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},
    {keyCode: 65, keyPad: "A", titleTune: "Shaker", url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},
    {keyCode: 83, keyPad: "S", titleTune: "Open-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},
    {keyCode: 68, keyPad: "D", titleTune: "Closed-HH", url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},
    {keyCode: 90, keyPad: "Z", titleTune: "Punchy-Kick", url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},
    {keyCode: 88, keyPad: "X", titleTune: "Side-Stick", url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},
    {keyCode: 67, keyPad: "C", titleTune: "Snare", url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}
];

var actualEvent;
var powerToggle = true;
var musicStyle = 1; 
var actualVolume = 0.5;
var tuneURL;

document.querySelector('#Q').addEventListener('click', qEvent); function qEvent() {defineTune(0); activeKey("#Q")}
document.querySelector('#W').addEventListener('click', wEvent); function wEvent() {defineTune(1); activeKey("#W")}
document.querySelector('#E').addEventListener('click', eEvent); function eEvent() {defineTune(2); activeKey("#E")}
document.querySelector('#A').addEventListener('click', aEvent); function aEvent() {defineTune(3); activeKey("#A")}
document.querySelector('#S').addEventListener('click', sEvent); function sEvent() {defineTune(4); activeKey("#S")}
document.querySelector('#D').addEventListener('click', dEvent); function dEvent() {defineTune(5); activeKey("#D")}
document.querySelector('#Z').addEventListener('click', zEvent); function zEvent() {defineTune(6); activeKey("#Z")}
document.querySelector('#X').addEventListener('click', xEvent); function xEvent() {defineTune(7); activeKey("#X")}
document.querySelector('#C').addEventListener('click', cEvent); function cEvent() {defineTune(8); activeKey("#C")}

document.addEventListener("keydown", key_pressed);

document.querySelector('#powertoggle').addEventListener('click', togglePower);
document.querySelector('#mp3-style').addEventListener('click', styleMusic);
document.querySelector('#key-volume').addEventListener('click', adjustVolume);

function activeKey(activeTune) {
    document.querySelector(activeTune).classList.add('active');
    setTimeout(function() {
        document.querySelector(activeTune).classList.remove('active');
    }, 200);
}

function key_pressed(e) {
    let k = e.which || e.keyCode;
    if (k == 81) qEvent();
    if (k == 87) wEvent();
    if (k == 69) eEvent();
    if (k == 65) aEvent();
    if (k == 83) sEvent();
    if (k == 68) dEvent();
    if (k == 90) zEvent();
    if (k == 88) xEvent();
    if (k == 67) cEvent();
}

function defineTune (tuneDefine) {
    if(powerToggle === true) {
        if (musicStyle === 1) {
            actualEvent = tuneStyleOne[tuneDefine].titleTune;
            tuneURL = tuneStyleOne[tuneDefine].url;
        } else {
            actualEvent = tuneStyleTwo[tuneDefine].titleTune;
            tuneURL = tuneStyleTwo[tuneDefine].url;
        }
    } else {
        actualEvent = "Power is OFF"
    }
    eventKey();
    playTune();
}


function eventKey() {
    document.getElementById('event'). textContent = actualEvent;
}

function togglePower() {
    var result;
    if (powerToggle === true) {
        result = "Power is OFF";
        powerToggle = false;
        document.documentElement.style.setProperty("--power", "#999");
        document.documentElement.style.setProperty("--border", "#999");
        document.getElementById('mp3'). textContent = "";
    } else {
        result ="Power is ON";
        powerToggle = true;
        document.documentElement.style.setProperty("--power", "#fff");
        document.documentElement.style.setProperty("--border", "crimson");
    }
    document.getElementById('power'). textContent = result;
    document.getElementById('event'). textContent = result;
    styleMusic();
}

function styleMusic() {
    var result;
    if (powerToggle === true) {
        if (musicStyle === 1) {
            result ="MP3 Style : 2";
            musicStyle = 2;
            document.documentElement.style.setProperty("--border", "#ff5900");

        } else {
            result = "MP3 Style : 1";
            musicStyle = 1;
            document.documentElement.style.setProperty("--border", "crimson");

        }
    } else {
        if (musicStyle === 1) {
            musicStyle = 2;
        } else {
            musicStyle = 1;
        }
        result = "Power is OFF";
    }
    document.getElementById('mp3'). textContent = result;
}

function adjustVolume() {
    actualVolume = document.querySelector('#key-volume').value;
    console.log(actualVolume);
}

function playTune() {
    console.log(actualVolume);
    if (powerToggle === true) {
        var audio = new Audio(tuneURL);
        audio.volume = actualVolume;
        audio.play();
    } else {
        var audio = new Audio("https://raw.githubusercontent.com/ericrkock/Code-Training/master/FreeCodeCamp/Projects/Front%20End%20Libraries/Drum%20Machine/tunes/power-off.mp3");
        audio.play();
    }
}