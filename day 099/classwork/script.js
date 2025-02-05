// შექმენით ობიექტი თქვენს თავზე, რომელშიც იქნება შეტანილი რამოდენიმე თვისება, 1. სახელი   2. გვარი   3. ასაკი   4. სიმაღლე  5. ქალაქი.    ობიექტში შექმენით ცალ ცალკე ობიექტი დედაზე, მამაზე, და დაძმაზე. ამ ობიექტებში შეიტანეთ იგივე თვისებები რაც შეიყვანეთ სულ თავიდან მშობელ ობიექტზე.

let me = {
    name: 'nika',
    age: 14,
    height: 187,
    lastname: 'kublashvili',
    city: 'tbilisi',
    mom: {
        name: 'nino',
        lastname: 'kochlamazashvili',
        age: 49,
        height: 165,
        city: 'tbilisi',
        dad: {
            name: 'giorgi',
            lastname: 'kublashvili',
            age: 48,
            height: 170,
            city: 'tbilisi'
        }

    }
}

console.log(me)