function beep(duration = 200, frequency = 440, volume = 0.5) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square'; // 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.frequency.value = frequency;
    gainNode.gain.value = volume;

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
        audioCtx.close();
    }, duration);
}

let vol = 0.5;

const infoVol = document.getElementById("infoVol");
const clavier = document.querySelectorAll("button");
const frequencies = [261.625, 277.182, 293.664, 311.126, 329.627, 349.228, 369.994, 391.995, 415.304, 440, 466.163, 493.883];

for (let i = 0; i < clavier.length; i++) {
    // clavier[i].removeEventListener("click");
    clavier[i].addEventListener("click", function () {
        beep(300, frequencies[i], vol);
        console.log("test")
    });
}


const input = document.getElementById("volume");
input.addEventListener("change", function () {
    vol = input.value;
    infoVol.innerHTML = vol;
})

document.addEventListener("keydown", (e) => {
    if (e.key === "a") beep(300, frequencies[0], vol)
    if (e.key === "é") beep(300, frequencies[1], vol)
    if (e.key === "z") beep(300, frequencies[2], vol)
    if (e.key === "\"") beep(300, frequencies[3], vol)
    if (e.key === "e") beep(300, frequencies[4], vol)
    if (e.key === "'") beep(300, frequencies[5], vol)
    if (e.key === "r") beep(300, frequencies[6], vol)
    if (e.key === "t") beep(300, frequencies[7], vol)
    if (e.key === "-") beep(300, frequencies[8], vol)
    if (e.key === "y") beep(300, frequencies[9], vol)
    if (e.key === "è") beep(300, frequencies[10], vol)
    if (e.key === "u") beep(300, frequencies[11], vol)

})
