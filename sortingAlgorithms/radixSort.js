// Function to get the digit at the i-th position (0-indexed) from the right of a number
const getDigit = (num, i) => 
    Math.floor(Math.abs(num) / Math.pow(10, i)) % 10; // Extracts the digit

// Function to count the number of digits in a number
const digitCount = (num) => {
    // If the number is 0, it has 1 digit
    if (num === 0) return 1; 
    // Otherwise, calculate the number of digits using logarithm
    else return Math.floor(Math.log10(Math.abs(num))) + 1; 
}

// Function to find the maximum number of digits in any number in the array
const getmaxDigit = (arr) => {
    let maxDigit = 0; // Initialize maxDigit to 0
    // Iterate through each value in the array
    for (let val of arr) {
        // Update maxDigit if the current number has more digits
        if (digitCount(val) > maxDigit) maxDigit = digitCount(val);
    }
    return maxDigit; // Return the maximum digit count found
}

//only for positive numbers
// Main function to perform Radix Sort on an array
function radixSort(arr, comparator) {
    // Get the maximum number of digits in the array
    let maxDigitCount = getmaxDigit(arr);
    
    // Loop through each digit position (from least significant to most significant)
    for (let k = 0; k < maxDigitCount; k++) {
        // Create an array of buckets for each digit (0-9)
        let digitbuckets = Array.from({ length: 10 }, () => []); // Create 10 empty buckets
        
        // Place each number in the appropriate bucket based on the current digit
        for (let num of arr) {
            // Get the digit at position k and push the number into the corresponding bucket
            digitbuckets[getDigit(num, k)].push(num);
        }
        
        // Flatten the buckets back into the array
        arr = [].concat(...digitbuckets);
    }
    return arr; // Return the sorted array
}

// Example usage
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]


// Perform quicksort on various arrays of numbers and log the results
console.log(
    radixSort([3, 4, 6, 1, 1, 2, 3, 4, 7]), // Sorts the array of numbers
    radixSort([3, 4, 6, 12, 8, 1, 2, 13, 34]), // Sorts another array of numbers
    radixSort([1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]), // Sorts yet another array
    radixSort([4]) // Sorts a single-element array (should return [4])
);
console.log(radixSort([1.3,3434350989,34878905,213,23]));

// console.log(...[[1.3,3434350989,34878905,213,23],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]])
// console.log([].concat(...[1.3,3434350989,34878905,213,23,[1,2,34]]))
console.log(...[[1.3,3434350989,34878905,213,23,[1,2,34]],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]])
console.log([].concat(...[[1.3,3434350989,34878905,213,23,[1,2,34]],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]]))
