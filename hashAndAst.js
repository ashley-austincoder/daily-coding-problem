"use strict";


/***
Given:
A string containing ONLY asterisks and hash-marks (* and #).


Write a function (or functions) that, when given a string with #s and *s,
returns the longest substring containing an equal number of hash-marks (#)
and asterisks (*). If the input string is empty, or no such substring can
be found, return an empty string.

#*#*##*#
      i

start = 1;
end = 0;

****/


(function() {
  var input_strings = [
    "#####*",
    "**##*##**##",
    "#*#*#*##",
    "",
    "******"];

  let longest_substring = function(str_to_check) {

    let counts = {hash: 0, ast: 0};
    for(let i = 0; i < str_to_check.length; i++) {
        if(str_to_check[i] === '#') {
            counts.hash++;
        } else {
            counts.ast++
        }
    }

    if(counts.hash === counts.ast) {
      return str_to_check;
    }

    let currentLongest = '';
    let max = Math.min(counts.hash, counts.ast);
    let currentHash = 0;
    let currentAst = 0;
    let startIndex = 0;
    let end = 0;

    while (end < str_to_check.length) {
      let char = str_to_check[end];
      if (char === '#') {
         currentHash++;
      } else {
          currentAst++;
      }

      if (currentAst === currentHash) {
          if (end - startIndex > currentLongest.length) {
              currentLongest = str_to_check.slice(startIndex, end + 1);
          }
      }

      while (currentHash > max) {
         let topOfStr = str_to_check[startIndex];
         if (topOfStr !== '#') {
             currentAst--;
         } else {
             currentHash--;
         }

        startIndex++;
      }

      while (currentAst > max) {
        let topOfStr = str_to_check[startIndex];
        if (topOfStr !== '#') {
            currentAst--;
        } else {
            currentHash--;
        }

       startIndex++;
      }

      end++;
    }

    return currentLongest;
  };

  input_strings.forEach(s => console.log(`${s} => ${longest_substring(s)}`));


})()
