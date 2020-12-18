// Game object with methods to control the game
var game = {
    win: 0,
    lose: 0,
    gleft: 10,
    used: [],
    blanks: [],
    // Words to be guessed in game
    words: ["Kobe", "LeBron", "Jordan", "Iverson", "Shaq", "Curry"],

    // Function that updates that updates the game.
    updateGame: function() {
        document.getElementById("wins").textContent = this.win;
        document.getElementById("loses").textContent = this.lose;
        document.getElementById("gleft").textContent = this.gleft;
        document.getElementById("used").textContent = this.used.join(" ");
        document.getElementById("word").textContent = this.blanks.join(" ");
    }
}

// Chosing random word from array to guess
var wordToGuess;

// Function that resets the game after a win or a lose for 10 more guesses and new word
function resetGame() {
    game.gleft = 10;
    wordToGuess = game.words[Math.floor(Math.random() * game.words.length)];
    // Makes all letters in word lowercased for easier guessing
    wordToGuess = wordToGuess.toLowerCase();
    game.blanks = [];
    game.used = [];
    // Adding dashes to replace words to guess in word
    for (var i = 0; i < wordToGuess.length; i++) {
    game.blanks.push("_");

}
    console.log(wordToGuess);
}


// Function to start game and choose new name to guess.
function startGame() {
        resetGame();
        document.getElementById("wins").textContent = game.win;
        document.getElementById("loses").textContent = game.lose;
        document.getElementById("gleft").textContent = game.gleft;
        document.getElementById("used").textContent = game.used.join(" ");
        document.getElementById("word").textContent = game.blanks.join(" ");
}

// Print out start of game
startGame();

//Push any key to make your first guess of the game.
document.onkeyup = function(event) {

    // Storing user guess into a variable.
    var userInput = event.key;
    // Variable representing all lowercass letters.
    var alpha = /[a-z]/;

    // 1. check letters individually to see if userInput matches any ofthem
    // 2. if userInput matches then update blanks with userInput in the same index
    // 3. if does not match then push letter to used array and lower guess left by one
    // 4. if userInput has already been guessed do nothing
    // 5. update win and lose count as respected

    // If guess left is zero start a new game
    if (game.gleft == 0) {
        game.lose++;
        game.updateGame();
        startGame();
    }

    // Checking if userInput is in the word to guess
    if (wordToGuess.includes(userInput)) {
        // Going through the array to check each letter
        for (var i = 0; i < wordToGuess.length; i++) {
            
            if (userInput === wordToGuess.charAt(i)) {
                game.blanks[i] = userInput;
            }
        }
        game.updateGame();
    }
    // Change nothing about the game if letter has already been used
    else if (game.used.includes(userInput)) {
        game.updateGame();
    }
    else {
        game.gleft--;
        game.used.push(userInput);
        game.updateGame();
    }

    if (game.blanks.join("") === wordToGuess) {
        game.win++;
        startGame();
    }
};
