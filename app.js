console.log("hello there!")

let hihatSound = new Audio("./sounds/hihat.wav");
let clapsound = new Audio("./sounds/clap.wav");
//do for each sound


const hihat = document.getElementById('hihat')

hihat.addEventListener('click', () => {
    hihatSound.play()
})