function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min = Infinity;
        let index = i;
        for(let j=i;j<arr.length-1;j++){
            if(arr[j]>arr[j+1] && arr[j+1]<=min){
                min = arr[j+1];
                index = j+1
            }
        }
        // //console.log(i,arr[i],arr[index],min,arr);
        if(min<arr[i]){
            arr[index] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}

function selectionSortCmp(arr,comparator){
    if(typeof comparator != 'function'){
        comparator = (a,b) => a-b;
    }

    for(let i=0;i<arr.length;i++){
        let lowestIndexValue = i;
        for(let j=i+1;j<arr.length;j++){
            if(comparator(arr[j],arr[lowestIndexValue])<0){
                lowestIndexValue = j
            }
        }
        if(lowestIndexValue!=i)[arr[i],arr[lowestIndexValue]] = [arr[lowestIndexValue],arr[i]];
        
    }
    return arr;
}
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
const arrr = selectionSortCmp(moarKittyData, oldestToYoungest); // sorted by age in descending order
console.log(arrr)

//console.log(
    // selectionSort([3,4,6,1,1,2,3,4,7]),
    // selectionSort([3,4,6,12,8,1,2,3,4]),
    // selectionSort([1,56,23,2,3,3,4,6,1,1,2,3,4]),
    // selectionSort([4])
// )

//console.log(
// selectionSortCmp([4, 20, 12, 10, 7, 9]), // [4, 7, 9, 10, 12, 20]
// selectionSortCmp([0, -10, 7, 4]), // [-10, 0, 4, 7]
// selectionSortCmp([1, 2, 3]), // [1, 2, 3]
// selectionSortCmp([]),
// )
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
//console.log(selectionSortCmp(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
console.log(selectionSortCmp(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]