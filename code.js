// Function to play the craps game
function playGame() {

    // Function to generate a random number between 1 and 6 (inclusive)
    function rollDie() {
        return Math.floor(Math.random() * 6) + 1;
    }

    // Roll two dice and get their values
    let die1 = rollDie();
    let die2 = rollDie();

    // Calculate the sum of the dice
    let sum = die1 + die2;

    // Display the rolled numbers
    document.getElementById('diceRolls').innerHTML = `Die 1: ${die1}, Die 2: ${die2}`;

    // Check the game rules and display the result
    if (sum === 7 || sum === 11) {
        document.getElementById('result').innerHTML = "CRAPS - you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById('result').innerHTML = "You won!";
    } else {
        document.getElementById('result').innerHTML = "You pushed!";
    }
}

// Attach the playGame function to the play button
document.getElementById('playButton').addEventListener('click', playGame);





    
    
    

    


