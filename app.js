const readline = require('readline');
const { generateDesc } = require('./controller/openaiController');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insert your youtube video title: \n", generateDesc);


