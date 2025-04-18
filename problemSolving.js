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

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

function areThereDuplicates(...arr) {
  let countObj = {};
  for(let val of arr){
    countObj[val] = (countObj[val] || 0) +1
    if(countObj[val]>1) return true;
  }
  return false;
}

/*function areThereDuplicates(...arr) {
  return new Set(arr).size == arr.length;
}*/

// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 


function findAllDuplicates(arr) {
  let countObj = {}; const result = [];
  for(let val of arr){
    countObj[val] = (countObj[val] || 0) +1
    if(countObj[val]>1) result.splice(0,0,val);
  }
  return result;
}

// console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // false
// console.log(findAllDuplicates([4, 3, 2, 1, 0])) // true 
// console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // true 

function constructNote(str1,str2){
  // add whatever parameters you deem necessary - good luck!
  for(let val of str1){
    if(str2.includes(val)) {
      str2 = str2.replace(val,'')
    }
    else return false;
  }
  return true
}

// console.log(constructNote('aa', 'abc'), // false
// constructNote('abc', 'dcba'), // true
// constructNote('aabbcc', 'bcabcaddff'), // true
// )

function averagePair(arr, val){
  let start=0;let end=arr.length-1;
  if(arr.length>0){
    while(start<=end){
      const result = (arr[start]+ arr[end])/2; //console.log(start,end,result,val)
      if(result == val) return true
      else if(result > val){
        end--;
      }else{
        start++;
      }
    }
  }
  return false;
}

// console.log(
//   averagePair([1,2,3],2.5), // true
//   averagePair([1,3,3,5,6,7,10,12,19],8), // true
//   averagePair([-1,0,3,4,5,6], 4.1), // false
//   averagePair([],4) // false
// )

function isSubsequence(str1,str2) {
  let firstPointer=secondPointer=0;
  while(secondPointer<str2.length){
    //console.log(str2[secondPointer],str1[firstPointer],firstPointer,secondPointer,str2[secondPointer] == str1[firstPointer]);
    if(str2[secondPointer] == str1[firstPointer]) firstPointer++;
    if(firstPointer === str1.length) return true;
    secondPointer++;
  }
  return false;
}

// console.log(isSubsequence('hello', 'hello world'), // true
// isSubsequence('sing', 'sting'), // true
// isSubsequence('abc', 'abracadabra'), // true
// isSubsequence('abc', 'acb'), // false (order matters)
// )

function findPair(arr,val){
  for(let val1=0;val1<arr.length;val1++){
    for(let val2=val1+1;val2<arr.length;val2++){
      if(arr[val1]-arr[val2] == val || arr[val2]-arr[val1] == val) return true
    }
  }  
  return false;
}

function findpairSorted(arr,n){
  var s = new Set(arr.map((e) => Math.abs(e - n)));
  console.log(s,arr);
  if (n === 0 && s.size === arr.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (s.has(arr[i])) return true;
  }
  return false;
}
// console.log(
//   findPair([6,1,4,10,2,4], 2), // true
//   findPair([8,6,2,4,1,0,2,5,13],1) ,// true
//   findPair([4,-2,3,10],-6), // true
//   findPair([6,1,4,10,2,4], 22), // false
//   findPair([], 0) ,// false
//   findPair([5,5], 0), // true
//   findPair([-4,4], -8), // true
//   findPair([-4,4], 8), // true
//   findPair([1,3,4,6],-2), // true
//   findPair([0,1,3,4,6],-2) // true
// )

// console.log(
//   findpairSorted([6,1,4,10,2,4]?.sort((a,b)=>a-b), 2), // true
//   findpairSorted([8,6,2,4,1,0,2,5,13]?.sort((a,b)=>a-b),1) ,// true
//   findpairSorted([4,-2,3,10]?.sort((a,b)=>a-b),-6), // true
//   findpairSorted([6,1,4,10,2,4]?.sort((a,b)=>a-b), 22), // false
//   findpairSorted([]?.sort((a,b)=>a-b), 0) ,// false
//   findpairSorted([5,5]?.sort((a,b)=>a-b), 0), // true
//   findpairSorted([-4,4]?.sort((a,b)=>a-b), -8), // true
//   findpairSorted([-4,4]?.sort((a,b)=>a-b), 8), // true
//   findpairSorted([1,3,4,6]?.sort((a,b)=>a-b),-2), // true
//   findpairSorted([0,1,3,4,6]?.sort((a,b)=>a-b),-2) // true
// )


function maxSubarraySum(arr,num){
  let maxSum = -Infinity;
  let tempSum = 0;
  if(arr.length<num) return null;
  for(let i=0;i<num;i++){
      tempSum+=arr[i]
  }
  for(let i=0;i<arr.length-num;i++){
      tempSum = tempSum+arr[num+i]-arr[i];
      maxSum = Math.max(tempSum,maxSum);
  }
  
  return maxSum;
}

// console.log(
// maxSubarraySum([100,200,300,400], 2), // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4),  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2), // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2), // 5
// maxSubarraySum([2,3], 3), // null
// )

function minSubArrayLen(arr,val){
  let start=end=total=0;
  let minLen  = Infinity;
  while(start<arr.length){
      if(total<val && end<arr.length){
          total+=arr[end]; end++;
      }else if(total>=val){
          minLen = Math.min(minLen,end-start);
          total-=arr[start];start++;
      }else{
          break;
      }
  }
  return minLen == Infinity?0:minLen;
}

// console.log(
//   minSubArrayLen([2,3,1,2,4,3], 7), // 2 -> because [4,3] is the smallest subarray
//   minSubArrayLen([2,1,6,5,4], 9), // 2 -> because [5,4] is the smallest subarray
//   minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52), // 1 -> because [62] is greater than 52
//   minSubArrayLen([1,4,16,22,5,7,8,9,10],39), // 3
//   minSubArrayLen([1,4,16,22,5,7,8,9,10],55), // 5
//   minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
//   minSubArrayLen([1,4,16,22,5,7,8,9,10],95), // 0
// )

function findLongestSubstring(str){
  let distinctObj = {};
  let longestStringCount = 0;let longestStringValue = '';
  let tempStringCount=0; let tempStringValue = '';
  let start = 0; let end = 0;
  while(start<str.length){
    if(end==str.length){
      start++;
      continue;
    }
    const val = str[end];
    distinctObj[val] = ( distinctObj[val] || 0 ) +1;
    // console.log(val,distinctObj)

    if(distinctObj[val] == 1){
      tempStringCount++;
      tempStringValue+=val;
      end++;
      if(tempStringCount>=longestStringCount){
        longestStringCount = tempStringCount;
        longestStringValue = tempStringValue;
      }
    }
    else {
      distinctObj = {};
      end=start++;
      tempStringCount=0; tempStringValue = '';
    }
  }
  return {longestStringCount,longestStringValue};
}

function findLongestSubstringOptimal(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// console.log(
//   findLongestSubstringOptimal(''), // 0
//   findLongestSubstringOptimal('rithmschool'), // 7
//   findLongestSubstringOptimal('thisisawesome'), // 6
//   findLongestSubstringOptimal('thecatinthehat'), // 7
//   findLongestSubstringOptimal('bbbbbb'), // 1
//   findLongestSubstringOptimal('longestsubstring'), // 8
//   findLongestSubstringOptimal('thisishowwedoit'), // 6
// )

function countZeroes(arr){
  let start=0;let end=arr.length-1;let mid = Math.floor((start+end)/2);
  const idx = findFirstZero(arr,start,end,mid);
  return arr.length-idx;
}

function findFirstZero(arr,start,end,mid){
  if(arr[end]===1){
    return arr.length;
  }else if (arr[0]===0){
    return 0;
  }else if(arr[mid-1] === 0){
    return findFirstZero(arr,start,mid,Math.floor((start+mid)/2))
  }else if(arr[mid]===0){
      return mid;
  }else{
      return findFirstZero(arr,mid+1,end,Math.floor((mid+end+1)/2))
  }
}

// console.log(
//   countZeroes([1,1,1,1,0,0]), // 2
//   countZeroes([1,0,0,0,0]), // 4
//   countZeroes([0,0,0]), // 3
//   countZeroes([1,1,1,1]), // 0,
//   countZeroes([1, 1, 1, 0,0]) //2,
// )


function sortedFrequency(arr,num){
  let start = Infinity;let end =0;
  for(let i=0;i<arr.length;i++){
      if(arr[i] ==num && i<start){
          start = i;
      }
      if(arr[i] ===num && i>end){
          end = i;
      }
  }
  return end===0 && start== Infinity?-1:end-start+1
}


console.log(
  sortedFrequency([1,1,2,2,2,2,3],2), // 4 
  sortedFrequency([1,1,2,2,2,2,3],3), // 1 
  sortedFrequency([1,1,2,2,2,2,3],1), // 2 
  sortedFrequency([1,1,2,2,2,2,3],4), // -1
)