function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let humanNumber = getRandomInt(6);
let pcNumber = getRandomInt(6);

if (humanNumber === pcNumber) {
    console.log(`Pari! ${humanNumber} a ${pcNumber}`);
} else if (humanNumber > pcNumber) {
    console.log(`Questa volta ha vinto l\'uomo! ${humanNumber} a ${pcNumber}`)
} else {
    console.log(`Questa volta ha vinto la macchina! ${pcNumber} a ${humanNumber}`)
}