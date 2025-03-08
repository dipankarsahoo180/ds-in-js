// Main function to perform quicksort on an array
function quickSort(arr, comparator) {
    // Call the formatted quicksort function with initial parameters
    return quickSortFormatted(arr, comparator, 0, arr.length);
}

// Helper function to perform the actual quicksort logic
function quickSortFormatted(arr, comparator, start, end) {
    // Check if there are at least two elements to sort
    if (start < end - 1) {
        // Find the pivot index using the pivot function
        let pivotIndex = pivot(arr, comparator, start, end);
        // Recursively sort the left part of the array
        quickSortFormatted(arr, comparator, start, pivotIndex);
        // Recursively sort the right part of the array
        quickSortFormatted(arr, comparator, pivotIndex + 1, end);
    }
    // Return the sorted array
    return arr;
}

// Function to find the pivot index and partition the array
function pivot(arr, comparator, start, end) {
    // If no comparator is provided, use a default numeric comparator
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }
    
    // Choose the first element as the pivot value
    let pivotValue = arr[start];
    // Initialize the pivot index to the start index
    let pivotIndex = start;

    // Loop through the array from the element after the pivot to the end
    for (let i = start + 1; i < end; i++) { 
        // If the current element is less than the pivot value
        if (comparator(arr[i], pivotValue) < 0) {
            // Increment the pivot index
            pivotIndex++;
            // Swap the current element with the element at the pivot index
            swap(arr, i, pivotIndex);
        }
    }
    // Swap the pivot element with the element at the pivot index
    swap(arr, start, pivotIndex);
    // Return the final pivot index
    return pivotIndex;
}

// Function to swap two elements in the array
function swap(arr, idx1, idx2) {
    // Use destructuring assignment to swap elements
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Sample data: array of objects representing cats with their ages
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

// Comparator function to sort by age in descending order
function oldestToYoungest(a, b) {
    return b.age - a.age; // Return positive if b is older than a
}

// Perform quicksort on the array of cat objects and log the result
console.log(quickSort(moarKittyData, oldestToYoungest));

// Perform quicksort on various arrays of numbers and log the results
console.log(
    quickSort([3, 4, 6, 1, 1, 2, 3, 4, 7]), // Sorts the array of numbers
    quickSort([3, 4, 6, 12, 8, 1, 2, 13, 34]), // Sorts another array of numbers
    quickSort([1, 56, 23, 2, 3, 3, 4, 6, 1, 1, 2, 3, 4]), // Sorts yet another array
    quickSort([4]) // Sorts a single-element array (should return [4])
);