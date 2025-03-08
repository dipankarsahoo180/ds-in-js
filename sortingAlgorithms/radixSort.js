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

// Main function to perform Radix Sort on an array
function radixSort(arr) {
    // Get the maximum number of digits in the array
    let maxDigitCount = getmaxDigit(arr);
    
    // Loop through each digit position (from least significant to most significant)
    for (let k = 0; k < maxDigitCount; k++) {
        // Create an array of buckets for each digit (0-9) for positive and negative numbers
        let digitBuckets = {};
        const data = [];
        
        // Initialize buckets for negative and positive digits
        for (let i = -9; i < 10; i++) {
            digitBuckets[i] = [];
        }

        // Place each number in the appropriate bucket based on the current digit
        for (let num of arr) {
            if (num < 0) {
                // For negative numbers, we use -1 to -9 as buckets
                digitBuckets[-getDigit(num, k)].push(num);
            } else {
                // For positive numbers, we use 0 to 9 as buckets
                digitBuckets[getDigit(num, k)].push(num);
            }
        }
        
        // Flatten the buckets back into the array
        // First, add negative numbers and then +ve numbers
        for (let i = -9; i <10; i++) {
            data.push(...digitBuckets[i]);
        }

        arr = data; // Update the array with the newly sorted data
    }
    return arr; // Return the sorted array
}

// Example usage
const numbers = [170, -45, 75, 90, -802, 24, 2, -66,-802,0];
console.log(radixSort(numbers)); // Output: (10) [-802, -802, -66, -45, 0, 2, 24, 75, 90, 170]


console.log(
    radixSort([-3, 4, 6, 1, -10, 2, 3, 4, -7]),
    radixSort([3, 4, 6, 12, 8, 1, 2, 13, 34]),
    radixSort([1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]),
    radixSort([4]),
    radixSort([1.3,3434350989,34878905,21.3,23])
);



console.log(...[[1.3,3434350989,34878905,213,23],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]])
console.log([].concat(...[1.3,3434350989,34878905,213,23,[1,2,34,[1,2,3,[1.2,3]]]]))
console.log(...[[1.3,3434350989,34878905,213,23,[1,2,34]],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]])
console.log([].concat(...[[1.3,3434350989,34878905,213,23,[1,2,34]],[1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]]))
console.log(getDigit(-80981,2))
