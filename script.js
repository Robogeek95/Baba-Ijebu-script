var matches = [];
function getMatch(a, b) {

    for (var i = 0; i < a.length; i++) {
        for (var e = 0; e < b.length; e++) {
            if (a[i] === b[e]) matches.push(a[i]);

        }

    }
    showMatches()
}

//Displays number of correct guesses
function showMatches() {
    for (var i = 0; i < matches.length; i++) {
        console.log(matches.length);

    }
    results();
}

//prompts user to guess numbers
let guessArray = [];
function guesses(a) {
    for (var i = 0; i < a; i++) {
        let currentGuess = prompt("Guess a number");
        guessArray.push(currentGuess);
    }
    showGuess();

}

//Shows guess by user
function showGuess() {
    for (var i = 0; i < guessArray.length; i++) {
        document.querySelector(".t2").innerHTML = guessArray;

    }

}

//random numbers by computer
let randomArray = [];
function randomNumbers(a) {
    for (var i = 0; i < a; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        randomArray.push(randomNumber.toString());
    }
    showRandomNumbers();
}

//Shows random numbers by computer
function showRandomNumbers() {
    for (var i = 0; i < randomArray.length; i++) {
        console.log(randomArray[i]);
        document.querySelector(".t1").innerHTML = randomArray;

    }
}


function results() {

    if (matches.length == 5) {
        let guesses = "You Had all guesses right"
        let reward = "You've won 20million naira and a trip to Dubai"
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("reward").innerHTML = reward;
    }
    if (matches.length == 3 || matches.length == 4) {
        let guesses = "You Had " + matches.length + " guesses right"
        let reward = "You've won 15million naira and a trip to Calabar"
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("reward").innerHTML = reward;
    }
    if (matches.length == 2) {
        let guesses = "You Had " + matches.length + " guesses right"
        let reward = "You've won 10million naira and a night at hi-impact"
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("reward").innerHTML = reward;
    }
    if (matches.length == 1) {
        let guesses = "You Had " + matches.length + " guesses right"
        let reward = "You've won 1million naira"
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("reward").innerHTML = reward;
    }
    if (matches.length == 0) {
        let guesses = "You didn't meet any of our conditions";
        let reward = "We're sorry Baba-Ijebu is not your way"
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("reward").innerHTML = reward;
    }
}


