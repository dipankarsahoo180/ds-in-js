const bubbleSort = (arr) => {
    let noSwaps; //optimization
    for(let i=0;i<arr.length;i++){
        noSwaps = true;
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                // const temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]] //array destructuring 
                noSwaps = false;
            } 
        }
        // console.log(i,noSwaps)
        if(noSwaps) break;
    }
    return arr;
}


function bubbleSortWithComparator(arr, comparator) {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if (typeof comparator !== 'function'){
                if((arr[j]>arr[j+1])){
                    [arr[j],arr[j+1]] = [ arr[j+1],arr[j]]
                }
            }
            else if(comparator(arr[j],arr[j+1])>0){
                [arr[j],arr[j+1]] = [ arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

const comparator = (a,b)=>{
    return a-b
}

console.log(
    bubbleSortWithComparator([3,4,6,1,1,2,3,4],comparator),
    bubbleSortWithComparator([3,4,6,12,8,1,2,3,4]),
    bubbleSort([1,56,23,2,3,3,4,6,1,1,2,3,4]),
    bubbleSort([4])
)