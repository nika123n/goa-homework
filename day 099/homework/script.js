// Create an object named student with the following properties:
// name (string)
// age (number)
// grade (string)
// isEnrolled (boolean)
// Add a method called getInfo() that returns a formatted string with the student's details.
// Update the student's grade to a new value and log the updated object.

let book = {
    Title: "Harry Potter",
    Autor: "Bakur Sulakauri",
    Year: 2024,
    
    getInfo() {
        return `${this.Title} by ${this.Autor}, published in ${this.Year}`
    }
}

console.log(book.getInfo());
