//beginers code

const prompt = require('prompt-sync')();

let choice, menu, comWins = 0, youWins = 0;

let com = ['Rock', 'Paper', 'Sicors'];

do {
    comChoice = com[Math.floor(Math.random() * com.length)];
    console.log("\n1.Rock\t2.Paper\t3.Sicors\n");
    choice = Number.parseInt(prompt("Enter your choice: "));
    console.log();

    switch (choice) {
        case 1:
            if (comChoice == 'Rock')
                console.log(`Computer: ${comChoice} You: Rock => Draw`);
            else if (comChoice == 'Paper') {
                console.log(`Computer: ${comChoice} You: Rock => Computer wins`);
                comWins++;
            }
            else {
                console.log(`Computer: ${comChoice} You: Rock => You Wins`);
                youWins++;
            }
            break;

        case 2:
            if (comChoice == 'Paper')
                console.log(`Computer:${comChoice} You: Paper => Draw`);
            else if (comChoice == 'Rock') {
                console.log(`Computer:${comChoice} You: Paper => You wins`);
                youWins++;
            }
            else {
                console.log(`Computer:${comChoice} You: Paper => Computer Wins`);
                comWins++;
            }
            break;

        case 3:
            if (comChoice == 'Sicors')
                console.log(`Computer:${comChoice} You: Sicors => Draw`);
            else if (comChoice == 'Rock') {
                console.log(`Computer:${comChoice} You: Sicors => Computer wins`);
                comWins++;
            } else {
                console.log(`Computer:${comChoice} You: Sicors => You Wins`);
                youWins++;
            }
            break;

        default:
            console.log(`Invalid choice`);
    }

    console.log("\n1.View Scores & Play Again\t2.Exit");
    menu = Number.parseInt(prompt("Enter your choice: ",10));
    // Specifying 10 ensures the input is interpreted as a base-10 decimal number, regardless of the input format.

    if (menu == 1)
        console.log(`\nComputer: ${comWins} You:${youWins}`);

} while (menu != 2);


console.log(`\nComputer: ${comWins} You:${youWins}`);
if(comWins>youWins)
    console.log("Sorry, Computer won the match.");
else if(comWins<youWins)
    console.log("Congrats! You won the match.");
else
    console.log("Its a cold drawl.");