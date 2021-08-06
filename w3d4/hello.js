const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const askAge = () => {
    interface.question('How old are you? ', age => {
        if(parseInt(age) < 16) console.log('you are not allowed to drive in Iowa');
        else console.log("You are allowed to get a drivers license in Iowa");
        interface.close();
    });
}

interface.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    askAge(interface);
});