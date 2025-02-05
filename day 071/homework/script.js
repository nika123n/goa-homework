//4) Write a function that generates a random number between 1 and 100 using Math.random().
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(getRandomNumber());