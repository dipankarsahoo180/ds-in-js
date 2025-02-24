const input1 = [1, 2, 3, 2, 1, 1];
const input2 = [4, 1, 9, 5, 1, 4, 90, 1];

function frequencyCounters() {
  if (input1.length <= input2.length) {
    for (let i = 0; i < input1.length; i++) {
      let correctIndex = input2.indexOf(input1[i] ** 2);
      if (correctIndex == -1) return false;
      input2.splice(correctIndex, 1);
      console.log(input2);
    }
    return true;
  }
}

//console.log(frequencyCounters()); // O(n log(n))

function frequencyCounterBetter() {
  if (input1.length <= input2.length) {
    inputFrequency1 = {};
    inputFrequency2 = {};
    for (let i of input1) {
      inputFrequency1[i] = (inputFrequency1[i] || 0) + 1;
    }
    for (let i of input2) {
      inputFrequency2[i] = (inputFrequency2[i] || 0) + 1;
    }

    for (let i of input1) {
      if (inputFrequency1[i] > inputFrequency2[i ** 2]) return false;
    }
    return true;
  }
}

//console.log(frequencyCounterBetter()) // O(3n) == O(n)

const checkAnagram = (str1, str2) => {
  console.log(str1, str2);
  for (let i of str1.toLowerCase()) {
    if (!str2?.includes(i)) return false;
    str2 = str2.replace(i, "");
  }
  console.log(str1, str2);
  return true;
};

// console.log(checkAnagram('anagram', 'nagarawm'));

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length > 1) {
    let counter = 0;
    let endCounter = 1;
    while (arr.length>endCounter) {
      if (arr[counter] != arr[endCounter]) {
        counter++;
        arr[counter] = arr[endCounter];
      }
      endCounter++;
    }
    return counter+1;
    } else if (arr.length == 1) {
        return 1;
    } else {
        return 0;
    }
}

//console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));


function sameFrequency(num1,num2){
  // good luck. Add any arguments you deem necessary.
  const str1 = num1.toString();
  const str2 = num2.toString();
  const countObj1 = {}; const countObj2 = {};
  for(let val of str1){
      countObj1[val] = (countObj1[val] || 0) +1;
  }
  
  for(let val of str2){
      countObj2[val] = (countObj2[val] || 0) +1;
  }
  
  for(let val of Object.keys(countObj1)){
      if(countObj1[val] != countObj2[val]) return false;
  }
  return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false