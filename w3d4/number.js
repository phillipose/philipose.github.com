const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let sum = 0;
const getNumber = () => {
    interface.question('Please enter a number?', number => {
        if(number === "stop") {
            console.log(`sum is ${sum}`)
            sum = 0;
            interface.close();
            return;
        }

        sum += parseInt(number);
        getNumber();
    });
}

getNumber();