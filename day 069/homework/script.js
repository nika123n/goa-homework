// Get Length: Create an array with 5 items. Log the length of the array.
// Convert to String: Convert the same array to a string using toString() and log the result.
// Access Element: Use the at() method to access the second element and log it.
// Join Elements: Use join() to combine the array elements with - between them.
// Push & Pop: Add two new elements to the array using push(), then remove the last element using pop().

let myArray = ["apple", "banana", "cherry", "date", "elderberry"];

console.log("Length of array:", myArray.length);
console.log("Array as string:", myArray.toString());
console.log("Second element:", myArray.at(1));
console.log("Joined elements:", myArray.join("-"));

myArray.push("fig", "grape");
console.log("After push:", myArray);

myArray.pop();
console.log("After pop:", myArray);