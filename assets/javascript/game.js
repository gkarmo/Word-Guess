   
   
   
    var listOfWords = ["chris", "aubrey", "adam", "dwayne", "natashia", "ashley", "samantha"];

    var directionsText = document.getElementById("directions-text");
    var currentWord = document.getElementById("current-word");
    var blankSpaces = document.getElementById("blank-spaces");
    var guessLeft = document.getElementById("guess-left");
    var guessCounter = document.getElementById("guess-counter");
    var oldLetters = document.getElementById("old-letters");
    var oldCounter = document.getElementById("old-counter");
    var theWord = document.getElementById("the-word");

    document.onkeyup = function(event) {

        var playerGuess = event.key;

        var wordToGuess = listOfWords[Math.floor(Math.random() * listOfWords.length)];

        var wins;
        var gleft;
        var oldLets;
        var wordUsed;

        var blankSpaces = [];

        for (i = 0; i < wordToGuess.length; i++) {
            blankSpaces[i] = "_";
            directionsText.textContent = " ";   
            theWord.textContent = "The word is " + wordToGuess;
            

        }
        // Code works up to this point

        for (gleft = 5; gleft > 0; gleft--) {
           blankSpaces.textContent = blankSpaces;

            
        }

        // for (wordUsed = 0; wordUsed < wordToGuess.length; wordUsed++) {

        //     if (wordToGuess === "Christoper") {
        //         currentWord.textContent = "Current word";
        //         blankSpaces.textContent = "_ _ _ _ _";
                
        //         if (playerGuess === wordToGuess.charAt(0)) {
        //             blankSpaces.textContent = "C _ _ _ _";
        //         }
        //         else{
        //             gleft--;
        //             guessCounter.textContent = gleft;

        //             if (gleft === 0) {
        //                 wordUsed++;
        //             }
        //         }

        //         if (playerGuess === wordToGuess.charAt(1)) {
        //             blankSpaces.textContent = "_ h _ _ _";
        //         }
        //         else{
        //             gleft--;
        //             guessCounter.textContent = gleft;

        //             if (gleft === 0) {
        //                 wordUsed++;
        //             }
        //         }

        //     }
        //     else if (wordToGuess === "Aubrey") {
        //         currentWord.textContent = "Current word";
        //         blankSpaces.textContent  = "_ _ _ _ _ _";
        //     }
        //     else if (wordToGuess === "Adam") {
        //         currentWord.textContent = "Current word";
        //         blankSpaces.textContent = "_ _ _ _";
        //     }
        //     else if (wordToGuess === "Dwayne") {
        //         currentWord.textContent = "Current word";
        //         blankSpaces.textContent = "_ _ _ _ _ _";
        //     }
        //     else (wordToGuess === "Natashia") {
        //         blankSpaces.textContent = "_ _ _ _ _ _ _ _";
        //     }

        }
