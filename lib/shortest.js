import { isString } from './helpers.js';
import { split } from './split.js';


/**
 * A function that reads in a string of words and puts out the shortest word 
 * in the string of words
 * @param {string} str a string of words 
 * @returns {string} a string that is the shortest word from the input 
 * or the null if a string is not passed in 
 * 
 */
export function shortest(str) {
    if(!isString(str)){
      return null;
    }
  
    let shortest;
    let shortestLength = 0;
    let words =  [];
    words = split(str);
  
    shortest = words[0];
    shortestLength = words[0].length;
  
    for (let i = 0; i < words.length ; i++ ){
      if (words[i])
      if ( words[i].length < shortestLength){
        shortestLength = words[i].length;
        shortest = words[i];
      }
    }
  
    return shortest;
  }