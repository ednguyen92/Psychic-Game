// Define words that computer can pick from
var computerChoices = ["Pikachu", "Squirtle", "Charmander", "Bulbasaur"];

// Set the initial global variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];


      // Have computer pick a letter and store it in letterToBeGuessed
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesMade + " Computer picked: " + computerGuess);

          // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
   
        // Determines which key was pressed.
        var userGuess = event.key;

        var hiddenAnswer = [];
        for (var i = 0; i < computerGuess.length; i++) {
        hiddenAnswer[i] = "_";
        }

        

       


        guessesMade[guessesMade.length]=userGuess;

    	// Displaying progress to HTML
        var html = "<p><h1>HangMan</h1></p>" + 
        "<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
        "<p><h4>Wins: " + wins + "</h4></p>" + 
        "<p><h4>Losses: " + losses + "</h4></p>" + 
        hiddenAnswer +
        "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
        "<p><h4>Your guesses so far: " + guessesMade + "</h4></p>";
        // place html into the game ID
        document.querySelector("#game").innerHTML = html;

        }