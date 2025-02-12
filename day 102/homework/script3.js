//Description: Write a function that takes an array and a value as arguments and adds the value to the end of the array using the push() method. The function should return the new length of the array.

function func(arr, value){
    arr.push(value)
    console.log(arr.length)
}
func([1,2,3,4], '5')
