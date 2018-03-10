
// Define alphabet letters that computer can pick from
var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
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


      if (userGuess === computerGuess) {
        wins++;
        console.log("You won!");
        guessesLeft = 9;
		guessesMade = [];
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesMade + " Computer picked: " + computerGuess);
	} else  {
		guessesMade[guessesMade.length]=userGuess;
		guessesLeft--;
    } 
    if (guessesLeft === 0){
        losses++;
        console.log("You lost!");
        guessesLeft = 9;
		guessesMade = [];
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesMade + " Computer picked: " + computerGuess);
    }

    



	// Displaying progress to HTML
    var html = "<p><h1>The Psychic Game</h1></p>" + 
    "<p><h4>Guess what letter I\'m thinking of</h4></p>" + 
    "<p><h4>Wins: " + wins + "</h4></p>" + 
    "<p><h4>Losses: " + losses + "</h4></p>" + 
    "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
    "<p><h4>Your guesses so far: " + guessesMade + "</h4></p>";
	// place html into the game ID
    document.querySelector("#game").innerHTML = html;

}   