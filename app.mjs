//app.mjs
import randomTen from "./modules.mjs";
const dog="Papilon";
const cat = "The cat is Garfield";
const random_p = document.querySelector('.random > p');
//random_p.innerHTML = dog;
random_p.innerHTML = randomTen();
console.log('hiya');
