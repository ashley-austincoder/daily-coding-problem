function getClosingParen(sentence, openingParenIndex) {

  let numParensToIgnore = 0,
    closingIndex;
  for(let i = openingParenIndex + 1; i < sentence.length; i++) {
    if(!closingIndex) {
      if(sentence[i] === '(') {
        numParensToIgnore++;
      } else if (sentence[i] === ')') {
        if(numParensToIgnore === 0) {
          return i;
        }
        numParensToIgnore--;
      }
    }
  }
  throw new Error('No closing parentheses');
}
