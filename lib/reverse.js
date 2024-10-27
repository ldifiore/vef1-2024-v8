import { isString } from './helpers.js';
import { split } from './split.js';


/**
 * A function that reads in a string and puts out the 
 * reverse (by character) string 
 * @param {string} str a string
 * @returns {string} a string that is the reverse of str 
 * or the null if a string is not passed in 
 */
export function reverse(str) {
    if(!isString(str)){
      return null;
    }
    
    let forwardArray = [];
    let reverseArray = [];
    let reverseString = "";
    forwardArray = split(str,"");
  
    for(let i = 0 ; i < forwardArray.length ; i++){
      reverseArray[forwardArray.length - i - 1] = forwardArray[i];
    }
  
    for(let i = 0 ; i < reverseArray.length ; i++){
      reverseString = reverseString.concat(reverseArray[i]);
    }
  
    return reverseString;
  }