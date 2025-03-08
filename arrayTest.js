let arr = [1,2,3,4,5];
console.log(arr)
arr.splice(1,2,6); //start index,delete count,replace with
console.log(arr)
arr = arr.slice(1,3) //include index,exclude index
console.log(arr)




console.log(...[[1.3,3434350989,34878905,213,23],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]])
console.log([].concat(...[1.3,3434350989,34878905,213,23,[1,2,34,[1,2,3,[1.2,3]]]]))
console.log(...[[1.3,3434350989,34878905,213,23,[1,2,34]],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]])
console.log([].concat(...[[1.3,3434350989,34878905,213,23,[1,2,34]],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]]))