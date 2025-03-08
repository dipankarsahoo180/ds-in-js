let instructor = {
    name:{fname:"dipankar", lname:"Sahoo"},
    isStudent: true,
    nos:[1,2,3,4]
}

console.log(Object.keys(instructor))
console.log(Object.values(instructor))
console.log(Object.entries(instructor))
console.log(Object.hasOwn(instructor,'name'))
console.log(Object.hasOwn(instructor,'lname'))