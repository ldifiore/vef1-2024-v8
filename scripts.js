/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString } from './lib/helpers.js';
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { palindrome } from './lib/palindrome.js';
import { reverse } from './lib/reverse.js';
import { split } from './lib/split.js';
import { vowels } from './lib/vowels.js';
import { consonants } from './lib/consonants.js';



const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;


const stringElm = document.getElementById('string');
const outputElm = document.querySelector('.output');
const inputElm = document.querySelector('.input');
const longestElm = document.querySelector('.longest');
const shortestElm = document.querySelector('.shortest');
const vowelsElm = document.querySelector('.vowels');
const consonantsElm = document.querySelector('.consonants');
const palindromeElm = document.querySelector('.palindrome');
const reversedElm = document.querySelector('.reversed');

 const submitElm = document.getElementById('submit');
 submitElm.addEventListener('click',submitted);
 stringElm.addEventListener('keyup',display);


 const resetElm = document.getElementById('reset');
 resetElm.addEventListener('click',clear);

function display(){
    outputElm.classList.remove('hidden');
    inputElm.innerHTML = stringElm.value;
    longestElm.innerHTML = longest(stringElm.value);
    shortestElm.innerHTML = shortest(stringElm.value);
    vowelsElm.innerHTML = vowels(stringElm.value);
    consonantsElm.innerHTML = consonants(stringElm.value);
    palindromeElm.innerHTML = palindrome(stringElm.value);
    reversedElm.innerHTML = reverse(stringElm.value);
}

function submitted(evt){
    outputElm.classList.remove('hidden');
    evt.preventDefault();
}



function clear(){
    submitElm.value = "";
    outputElm.classList.add('hidden');

}
