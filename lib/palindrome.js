import { isString } from './helpers.js';
import { split } from './split.js';
import { reverse } from './reverse.js';



/**
 * checks if a string is a palindrome (same forwards and backwards)
 * @param {string} str a string
 * @returns {boolean} returns `true` if the string is a palindrome and `false` if
 * it is not a palindrome or if a non string or an empty string is passed in
 */
export function palindrome(str) {
    if(!isString(str)){
      return false;
    }
    if (str == ""){
      return false;
    }
  
    let forwardArray = [];
    let reverseArray = [];
    forwardArray = split(str,"");
    reverseArray = split(reverse(str),"");
  
    for ( let i = 0 ; i < forwardArray.length ; i++ ){
      if ( forwardArray[i].toLowerCase() !== reverseArray[i].toLowerCase()){
        return false;
      }
    }
    
    return true;
  }