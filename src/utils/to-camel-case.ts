import { Beer } from '../types/beer';

export function toCamelCase(array: Beer[]) {
  return array.map((dataObj) => JSON.parse(
    JSON.stringify(dataObj).trim().replace(/("\w+":)/g,
      (keys) => keys.replace(/[A-Z]+/g, (letter, index) => index === 0 ? letter.toLowerCase() : `_${letter.toLowerCase()}`)
        .replace(/(.(_|-|\s)+.)/g, (subStr) => subStr[0]+(subStr[subStr.length-1].toUpperCase()))),
    ),
  );
}
