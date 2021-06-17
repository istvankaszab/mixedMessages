const words = require('./words.json');

let message = "";

const getRandomWord = (wordClass) => words[wordClass][Math.floor(Math.random() * words[wordClass].length)];

const adjective1 = getRandomWord('adjectives');
const noun1 = getRandomWord('nouns');
const verb = getRandomWord('verbs');
const adjective2 = getRandomWord('adjectives');
const noun2 = getRandomWord('nouns');

message = `The ${adjective1} ${noun1} ${verb} the ${adjective2} ${noun2}.`;
console.log(message);