function insertionSort(arr,comparator){
    if(typeof comparator != 'function'){
        comparator = (a,b) => a-b
    }

    for(let i=1;i<arr.length;i++){
        let currentVal = arr[i];
        let index = i-1;
        for(index=i-1;index>=0 && comparator(arr[index],currentVal)>0;index--){
            arr[index+1] = arr[index]
        }
        arr[index+1] = currentVal
    }
    return arr;
}

console.log(
    insertionSort([3,4,6,1,1,2,3,4,7]),
    insertionSort([3,4,6,12,8,1,2,3,4]),
    insertionSort([1,56,23,2,3,3,4,6,1,1,2,3,4]),
    insertionSort([4])
)

var moarKittyData = [{
    name: "LilBub",
    age: 7
  }, {
    name: "Garfield",
    age: 40
  }, {
    name: "Heathcliff",
    age: 45
  }, {
    name: "Blue",
    age: 1
  }, {
    name: "Grumpy",
    age: 6
  }];
   
  function oldestToYoungest(a, b) {
    return b.age - a.age;
  }
   
  console.log(insertionSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order