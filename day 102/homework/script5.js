//Description: Write a function that takes two arrays as arguments, concatenates them, and then pushes a new value to the end of the concatenated array. The function should return the new array.

function func(array, arr){
    let new_array = [array + arr]    
    new_array.push('nika')
    console.log(new_array)
}
func(['he'], ['llo'])