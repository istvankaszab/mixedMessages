const words = require('./words.json');

let message = "";
const adjective1 = words.adjectives[Math.floor(Math.random() * words.adjectives.length)];
const noun1 = words.nouns[Math.floor(Math.random() * words.nouns.length)];
const verb = words.verbs[Math.floor(Math.random() * words.verbs.length)];
const adjective2 = words.adjectives[Math.floor(Math.random() * words.adjectives.length)];
const noun2 = words.nouns[Math.floor(Math.random() * words.nouns.length)];

message = `The ${adjective1} ${noun1} ${verb} the ${adjective2} ${noun2}.`;
console.log(message);