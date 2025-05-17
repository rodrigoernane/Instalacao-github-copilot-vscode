// This file is intentionally left blank.
let roulette = undefined;

function init() {
    roulette = new Roulette();
    roulette.start();
}

function startSpin() {
    if (roulette && typeof roulette.start === 'function') {
        roulette.start();
    } else {
        console.warn('Roulette instance not ready or start method missing.');
    }
}

function stopSpin() {
    if (roulette && typeof roulette.stop === 'function') {
        roulette.stop();
    } else {
        console.warn('Roulette instance not ready or stop method missing.');
    }
}

window.addEventListener('load', init);

// Example: if you have canvas event listeners, make sure they call startSpin/stopSpin
// document.getElementById('rouletteCanvas').addEventListener('click', startSpin);