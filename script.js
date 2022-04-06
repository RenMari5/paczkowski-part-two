/* 
Step one: Prompt name, store in variable (playerName)
Step two: Prompt if they want 3 or 6 holes in their game (holeNumber)
Step three: Prompt for score on each hole, 3 or 6 depending on number chosen in Step two.
   - Loop holeNumber 3 or 6 times
   - Store each score in variable (gameScore)
Step four: Keep track of that score in a variable to be added together later.
   - search for "how to add numbers together"
   - add score to total (Loop starting at 0, add score to that each time)
Step five: Print total score
Step six: Compare player's score to par for the game. (3 for each hole)
Step seven: After last hole, display one of three messages, based on player's score. (See instructions for this information)
   - If (total < 0)
   - Print 1st message
   - Else (total = 0)
   - Print 2nd message
   - Else (total > 0)
   - Print third message
*/

let playerName = prompt("Welcome to GC mini golf! What is your name?");

let holeNumber = prompt(`Hi ${playerName}! Would you like to play 3 or 6 holes?`);

let gameTotal = 0

let par = 3

for (i = 1; i <= holeNumber; i++) {
    let gameScore = Number(prompt(`How many putts for hole ${i}? (par: 3)`));
    gameTotal += gameScore;
}

if (holeNumber === 3) {
    let total = 9;
    gameTotal -= total;
} else if (holeNumber === 6) {
    gameTotal -= total * 2;
}

if (gameTotal < 0) {
    console.log("Great job, " + playerName + "! Your total par was: " + gameTotal + ".")
} else if (gameTotal === 0) {
    console.log("Good game, " + playerName + "! Your total par was: " + gameTotal + ".")
} else if (gameTotal > 0) {
    console.log("Nice try, " + playerName + "... Your total par was: " + gameTotal + ".")
}