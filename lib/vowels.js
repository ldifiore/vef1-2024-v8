import { isString } from './helpers.js';
import { split } from './split.js';

const VOWELS = split('aeiouyáéýúíóöæ','');


/**
 * A function that reads in a string and puts out 
 * the number of vowels in the string
 * @param {string} str a string
 * @returns {int} an integer number that is 
 * the number of vowels in str 
 */
export function vowels(str) {
    if(!isString(str)){
      return 0;
    }
  
    let forwardArray = [];
    forwardArray = split(str,"");
    let numberOfVowels = 0;
  
    for (let letter = 0 ; letter < forwardArray.length ; letter++){
      for (let vowel = 0 ; vowel < VOWELS.length ; vowel++){
        if (forwardArray[letter] == VOWELS[vowel]){
          numberOfVowels++;
        }
      }
    }
  
    return numberOfVowels;
  }