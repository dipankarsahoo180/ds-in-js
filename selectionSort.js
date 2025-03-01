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
        // console.log(i,arr[i],arr[index],min,arr);
        if(min<arr[i]){
            arr[index] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}

console.log(
    selectionSort([3,4,6,1,1,2,3,4,7]),
    selectionSort([3,4,6,12,8,1,2,3,4]),
    selectionSort([1,56,23,2,3,3,4,6,1,1,2,3,4]),
    selectionSort([4])
)