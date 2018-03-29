// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
        var computerRandom = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var wins = 0;
        var losses = 0;
        var guesses= [];
        var guessesLeft= 10;
        
        //user presse key function
        document.onkeyup = function(event) {

        //random letter picked and stored
        var computerPick = computerRandom[Math.floor(Math.random() * computerRandom.length)];

        // Determines which key was pressed.
        var userPick = event.key;
        guesses.push(userPick);
            //
            if (userPick === computerPick) {
            // add 1 to wins.    
            wins++;
            guesses= [];
            } else if (userPick !== computerPick) {
            // subtract 1 from guesses.    
            guessesLeft--;
                // if guesses reach 0, reset to 10 and add loss.
                if (guessesLeft === 0) {
                    losses++;
                    guessesLeft = 10;
                    guesses = [];
                }
            }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user wins, losses, etc.
        var html =

          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses So Far: " + guesses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>"

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      };