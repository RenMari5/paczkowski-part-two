let playerName = prompt("Welcome to GC mini golf! What is your name?");

let holes = prompt(`Hi ${playerName}! Would you like to play 3 or 6 holes?`);

let gameTotal = 0

let par = 3

for (i = 1; i <= holes; i++) {
    let totalPutts = Number(prompt(`How many putts for hole ${i}? (par: 3)`));
    gameTotal += totalPutts;
}

let numOfPutts = holes *= 3;

if (numOfPutts === 9) {
    gameTotal -= numOfPutts;
} else if (numOfPutts = 18) {
    gameTotal -= numOfPutts;
}

if (gameTotal < 0) {
    console.log("Great job, " + playerName + "! Your total par was: " + gameTotal + ".");
} else if (gameTotal === 0) {
    console.log("Good game, " + playerName + "! Your total par was: " + gameTotal + ".");
} else if (gameTotal > 0) {
    console.log("Nice try, " + playerName + "... Your total par was: " + gameTotal + ".");
}
