import { isString } from './helpers.js';
import { split } from './split.js';

/**
 * A function that reads in a string of words and puts out the longest word 
 * in the string of words
 * @param {string} str a string of words 
 * @returns {string} a string that is the longest word from the input 
 * or the null if a string is not passed in 
 * 
 */
export function longest(str) {
    if(!isString(str)){
      return null;
    }
    
    let longestWord = "";
    let longestLength = 0;
    let words =  [];
    words = split(str);
  
    for (let i = 0; i < words.length ; i++ ){
      if ( words[i].length > longestLength){
        longestLength = words[i].length;
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }