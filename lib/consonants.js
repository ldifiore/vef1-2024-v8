import { isString } from './helpers.js';
import { split } from './split.js';

const CONSONANTS = split('bcdfghjklmnpqrstvwxz','');


/**
 * A function that reads in a string and puts out 
 * the number of consonants in the string
 * @param {string} str a string
 * @returns {int} an integer number that is 
 * the number of consonants in str 
 */
export function consonants(str) {
    if(!isString(str)){
      return 0;
    }
  
    let forwardArray = [];
    forwardArray = split(str,"");
    let numberOfConsonants = 0;
  
    for (let letter = 0 ; letter < forwardArray.length ; letter++){
      for (let consonant = 0 ; consonant < CONSONANTS.length ; consonant++){
        if (forwardArray[letter] == CONSONANTS[consonant]){
          numberOfConsonants++;
        }
      }
    }
  
    return numberOfConsonants;
  }
  