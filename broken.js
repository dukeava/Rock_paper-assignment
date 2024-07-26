// Corrected variable declarations and initializations
let PlayerChoice = document.getElementsByClassName("choice");
let CompArray = ["Rock", "Paper", "Scissors"]; // Fixed array syntax
let innerscore = 0;

function RPS(numb) {
    // Corrected array index syntax and function usage
    let CompDecision = CompArray[Math.floor(Math.random() * CompArray.length)];
     
    // Fixed result display and comparison logic
    document.getElementById("result").innerText = "The computer chose: " + CompDecision;

    // NOTE: If a tie, add or subtract -0.5

    if (numb === 0) { // Fixed comparison operator
        if (CompDecision === "Paper") {
            innerscore -= 1; // Fixed operator
        }
        if (CompDecision === "Scissors") {
            innerscore += 1; // Fixed operator
        }
        // Handling tie case
        if (CompDecision === "Rock") {
            innerscore -= 0.5; // Fixed tie handling
        }
    }

    if (numb === 1) { // Fixed comparison operator
        if (CompDecision === "Rock") {
            innerscore += 1;
        }
        if (CompDecision === "Scissors") {
            innerscore -= 1; // Fixed operator
        }
        // Handling tie case
        if (CompDecision === "Paper") {
            innerscore -= 0.5; // Fixed tie handling
        }
    }

    if (numb === 2) { // Fixed comparison operator
        if (CompDecision === "Rock") {
            innerscore -= 1;
        }
        if (CompDecision === "Paper") {
            innerscore += 1;
        }
        // Handling tie case
        if (CompDecision === "Scissors") {
            innerscore -= 0.5; // Fixed tie handling
        }
    }

    // Corrected score display
    document.getElementById("score").innerHTML = innerscore;
}

// Event listeners or function calls to start the game should be added here
// Example (if buttons have IDs corresponding to the choices):
document.getElementById("rock").addEventListener("click", () => RPS(0));
document.getElementById("paper").addEventListener("click", () => RPS(1));
document.getElementById("scissors").addEventListener("click", () => RPS(2));
