function mergeSort(arr, comparator) {
    //split-sort-merge
    //arrays of 0 or 1 are merged
    // Base case: if the array has 0 or 1 elements, it's already sorted
    if (arr.length <=1) {
        return arr; // Return the single element as an array
    }

    // Split the array into halves
    const mid = Math.floor((arr.length) / 2);
    const leftArr = mergeSort(arr.slice(0,mid), comparator);
    const rightArr = mergeSort(arr.slice(mid), comparator);

    // Merge the sorted halves
    return merge(leftArr, rightArr, comparator);
}

function merge(arr1,arr2,comparator){
    if(typeof comparator != 'function'){
        comparator = (a,b) => a-b
    }
    let i=0;let j=0;let arr=[];
    while(arr1.length>i && arr2.length>j){
        if(comparator(arr1[i],arr2[j])<=0){
            arr.push(arr1[i]);i++
        }else{
            arr.push(arr2[j]);j++
        }
    }
    if (i<arr1.length){
        arr.push(...arr1.slice(i,arr1.length))
    }
    if(j<arr2.length){
        arr.push(...arr2.slice(j,arr2.length))
    }
    return arr;
}


console.log(
    mergeSort([3,4,6,1,1,2,3,4,7]),
    mergeSort([3,4,6,12,8,1,2,3,4]),
    mergeSort([1,56,23,2,3,3,4,6,1,1,2,3,4]),
    mergeSort([4])
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
   
  console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order