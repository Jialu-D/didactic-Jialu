
let nouns=["heart","rainbow","ocean"];
let verbs=["look","make","continue"];
let adjective=["good","different","possible"];


let random=Math.floor(Math.random()*nouns.length);
let noun=nouns[Math.floor(Math.random()*nouns.length)];
let verb=verbs[Math.floor(Math.random()*verbs.length)];
let adjective=adjectives[Math.floor(Math.random()*adjectives.length)];

//console.log(noun)
//console.log(verb)

let sentence=`My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky.`;
console.log(sentence);