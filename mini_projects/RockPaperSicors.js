//beginers code

const prompt = require('prompt-sync')();

let menu, comWins = 0, youWins = 0;
let choices = ['Rock', 'Paper', 'Sicors'];

function determineWinner(comChoice, yourChoice) {
    if (comChoice == yourChoice)
        return 'Draw';
    // Winning conditions
    const winConditions = {
        Rock: 'Sicors',
        Paper: 'Rock',
        Sicors: 'Paper'
    };

    return winConditions[yourChoice] === comChoice ? 'You' : 'Computer';
}

do {
    comChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("\n1.Rock\t2.Paper\t3.Sicors\n");
    choice = Number.parseInt(prompt("Enter your choice: "));
    yourChoice = choices[choice - 1];
    console.log();

    if (!yourChoice) {
        console.log("Please enter valid choice");
        continue;
    }

    console.log(`Computer: ${comChoice} You:${yourChoice}`);
    let result = determineWinner(comChoice, yourChoice);

    if (result == 'You'){
        console.log(`You win!`);
        youWins++;
    }
    else if (result == 'Computer') {
        console.log(`Computer Win!`);
        comWins++;
    }
    else {
        console.log(`It's draw`);
    }

    console.log("\n1.View Scores & Play Again\t2.Exit");
    menu = Number.parseInt(prompt("Enter your choice: "));

    if (menu == 1)
        console.log(`\nComputer: ${comWins} You:${youWins}`);

} while (menu != 2);


console.log(`\nComputer: ${comWins} You:${youWins}`);
if (comWins > youWins)
    console.log("Sorry, Computer won the match.");
else if (comWins < youWins)
    console.log("Congrats! You won the match.");
else
    console.log("Its a cold drawl.");