// შექმენით academy ობიექტი, სადაც შეიტანთ სვადასხვა თვისებებს, name, courses,  socialLink, reviews(ამ თვისებაზე ობიექტი ჩააშენეთ და მანდ შეიტანეთ 3 მომხმარებლის შეფასება - ხოლო თითო მომხმარებელზე შექმენით კიდევ ცალკე ობიექტი და შეიტანეთ 3 თვისება - 1. name     2.status(parent/child)     3. review)
// გამოიტანეთ ობიექტის თვისება-მნიშვნელობების სია

// გამოიტანეთ ობიექტის თვისებების სია

// გამოიტანეთ ობიექტის მნიშვნელობების სია

// შეამოწმეთ ობიექტს გააჩნია თუ არა რომელიმე თვისება

// ეს ობიექტი გააერთიანეთ ახალ ობიექტთან, რომელშიც იქნება შეტანილი member თვისება

// გაყინეთ ობიექტი

// შეამოწმეთ გაყინულია თუ არა ობიექტი

let academy = {
    name: 'nika',
    courses: 'nothing',
    sociallink: "blabla",
    reviews: {
        momxmarebeli_1: {
            name: "nika",
            parent: "ქალბატონი დედა",
            child: "არ ყავს",

        momxmarebeli_2: {
            name: "gio",
            parent: "qalbatoni deda",
            child: "andria",
            child_2: "marta",

        momxmarebeli_3: {
            name: "saba",
            parent: "qalbatoni deda",
            child: "ar yavs",
    
            }
    
            }
        }
    }
}
console.log(academy.reviews(academy))