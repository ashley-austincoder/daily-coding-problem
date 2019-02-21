function mergeArrays(myArray, alicesArray) {

  let myI = 0;
  let aliceI = 0;
  const mergedArr = [];
  let mine, alices;
  while(myI < myArray.length || aliceI < alicesArray.length) {
    mine = myArray[myI];
    alices = alicesArray[aliceI];
    if(mine < alices || aliceI === alicesArray.length) {
      mergedArr.push(mine);
      myI++;
    } else if (mine > alices || myI === myArray.length){
      mergedArr.push(alices);
      aliceI++;
    } else {
      mergedArr.push(mine, alices);
      myI++;
      aliceI++;
    }
  }
  
  return mergedArr;
}