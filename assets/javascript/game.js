   //Waits 1 second until the browser is loaded. I had a problem with the prompt prompting before page was loaded.     
   $(window).ready(function() {
    setTimeout(function() {
        var name = prompt("What is your name?") //prompts for username. 
        var html = //writes user name to html
            "<p>Welcome to the game " + name + "! Good luck!</p>";
        document.querySelector("#name").innerHTML = html;
    }, 1000); // 1 second wait before asking for username
});
// creates variablesarray for computer, a hold array for guesses, sets variables for wins, lossses, guesesLeft, and audio (along with the audio source).      
var computerRandom = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = [];
var guessesLeft = 10;
var restartButton = document.getElementById("restartButton"); //sets the reset button variable
restartButton.addEventListener("click", gameRestart); //listens for the click
var lossAudio = document.createElement('audio'); // sets the loss sound variable
lossAudio.src = './assets/sounds/buzz.mp3'; //loser audio file
var winnerAudio = document.createElement('audio'); //sets the winner sound variable
winnerAudio.src = './assets/sounds/winner.mp3'; //winner audio file

//random letter chosen and stored
var computerPick = computerRandom[Math.floor(Math.random() * computerRandom.length)];

//if you press the reset button this resets the wins, losses, guesses, and guesses left
function gameRestart() {
    wins = 0;
    losses = 0;
    guesses = [];
    guessesLeft = 10;

    //sets the html variables
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses So Far: " + guesses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}
//user presses key function.
document.onkeyup = function(event) {
    var userPick = event.key; //stores the key chosen as userPick.

    guesses.push(userPick); //pushes the user's choice to the array.
    //if the user's choice is equal to computer choice then variables are set and sound plays along with a popup.
    if (userPick === computerPick) {
        winnerAudio.play(); //plays winner audio file
        wins++; // add 1 to wins.
        alert("Winner, Winner, Chicken Dinner!"); //show popup d
        guesses = []; //resets guesses
        guessesLeft = 10; //resets guesses left countdown
        computerPick = computerRandom[Math.floor(Math.random() * computerRandom.length)]; //chooses another letter

        // runs this statemnt if user's choice doesn't equal the computer's choice.
    } else if (userPick !== computerPick) {
        guessesLeft--; // subtract 1 from guesses.
        // if guesses reach 0, reset to 10 and add loss, picks a new random number, and plays loss mp3
        if (guessesLeft === 0) {
            computerPick = computerRandom[Math.floor(Math.random() * computerRandom.length)];
            lossAudio.play();
            //activates the loss popup and resets the game. I threw the second if statement in so that the sound file above plays first.
            losses++;
            guessesLeft = 10;
            guesses = [];
            alert("You are all out of guesses.....  Try again");

        }
    }


    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user wins, losses, etc.
    var html =
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses So Far: " + guesses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}