/*

PROBLEM DESCRIPTION

    PP 1.6: In the programming language of your choice, write a method that modifies a string using the
    following rules:

    1. Each word in the input string is replaced with the following: the first letter of the word, the count of
    distinct letters between the first and last letter, and the last letter of the word. For
    example, “Automotive parts" would be replaced by "A6e p3s".

    2. A "word" is defined as a sequence of alphabetic characters, delimited by any non-alphabetic
    characters.

    3. Any non-alphabetic character in the input string should appear in the output string in its original
    relative location.

*/

// PROGRAMMING LANGUAGE: Javascript

// ASSUMPTIONS: 
  // non-alphabetic characters are any characters other than a-z or A-Z, including numbers, spaces and special characters

// DECLARING INPUTS AND OUTPUTS:
  // input: string
  // output: modified string

// --------------------------------  PSEUDOCODE  -------------------------------- \\
  // main function encodeString:
  // create result variable for modified string   
  // loop through original string, keep track of start and current index of all alphabetic characters
     // if you find a non-alphabetic character 
        // take substring from start to current index, convert with transorm function (logic below), and add to result
        // add non-alphabetic character as is to the result
     // once loop is finished you can return result

  // transform function - separating logic that will take one word and modify it as the problem states
   // (this will keep logic for transorming the words and modifying the string separate)
   // save first letter of word to a variable 
   // save last letter of word to a variable
   // loop through word, skipping first and last letter
      //if current index (i) is equal to the lastIndexOf that letter in the word, add it to the unique only string
   // return first letter + length of unique characters + last letter



// --------------------------------  REAL CODE  -------------------------------- \\

function encodeString(string){
  var modifiedString = "";
  var startIndex = 0;

  for(var i = 0; i < string.length; i++){
    //if this is the end of the loop, add any remaining substring or special character
    if(i === string.length-1){

      if(string[i].match(/[^A-Z]/gi) !== null){
        modifiedString += string[i];
      } else {
        var finalWord = string.substring(startIndex);
        modifiedString += transform(finalWord);
      }
    }

    
    else if(string[i].match(/[^A-Z]/gi) !== null){ //if true then character is non-alphabetic
      //check to make sure there is a substring to add (would not happen if two or more special char in a row)
      if(startIndex !== i){
        var word = string.substring(startIndex, i);
        //add transformed substring to modified string
        modifiedString += transform(word);
      } 
      //add special char to result string
      modifiedString += string[i];
      //restart startIndex at the next character
      startIndex = i + 1; 
    } 
  }

  return modifiedString;
}




function transform(word){
  var first = word[0];
  var last = word[word.length - 1];
  var unique = "";

  //remove last value to make lastIndexOf work as expected (shouldn't count last letter)
  word = word.slice(0,-1)

  for(var i = 1; i < word.length; i++){
    if(i === word.lastIndexOf(word[i])){
      unique += word[i];
    }
  }
  return first + unique.length + last;
} 



// --------------------------------  TESTING  -------------------------------- \\

//testing provided sample case
console.log("1. running test case input: 'Automotive Parts' \n   output should be 'A63 p3s':  ", encodeString("Automotive Parts"))

//testing multiple words and spaces
console.log("2. running test case input: 'Testing     More Spaces and Words' \n   output should be 'T5g     M2e S4s a1d W3s':  ", encodeString("Testing     More Spaces and Words"))

//testing special characters stay in correct relative location
console.log("3. running test case input: 'How about $^ @#$yes'  \n   output should be 'H1w a3t $^ @#$y1s':  ", encodeString("How about $^ @#$yes"))

//testing only special characters
console.log("4. running test case input: '********'  \n   output should be '********':  ", encodeString("********"))

//testing no unique characters inbetween first and last letter of words
console.log("5. running test case input: '123 aaaaaaaaaaaa bbbbb 321'  \n   output should be '123 a0a b0b 321':  ", encodeString("123 aaaaaaaaaaaa bbbbb 32"))

//testing end of input with unique characters
console.log("5. running test case input: 'checkitout 54321'  \n   output should be 'c8t 54321':  ", encodeString("checkitout 54321"))

