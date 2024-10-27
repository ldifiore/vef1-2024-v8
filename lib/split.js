import { isString } from './helpers.js';


/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
export function split(str, separator = ' ') {
    if (!isString(str)) {
      return [];
    }
  
    return str.split(separator);
  }