//  question1 
/*
let colors = ["red","blue","yellow","green","white"]
for(let displayColor = 0; displayColor < colors.length; displayColor++){
    // console.log( colors[displayColor])
}

// two

let fruits = ["Apple", "Orange", "Banana", "Mango"];
for(let i=0; i<fruits.length; i++){
    console.log(`fruit ${i+1} ${fruits[i]}`)
}
    

// three
let scores = [45, 78, 32, 90, 67];
for( let t=0; t<scores.length; t++){
    if(scores[t]>=50){
        // console.log(scores[t])
    }
}

// four
let ages = [12, 18, 25, 16, 30, 14, 21];
for(let j=0; j<ages.length; j++){
    if(ages[j]>= 18){
        console.log(`${ages[j]} -> Alloewd`)
    }else{
        console.log(`${ages[j]} -> not alloewd`)
    }
}

// function
function greetUser(name){
    console.log(`Welcome, ${name}`)
}

greetUser("Mahmud")

// check age
function checkAge(age){
    if(age >= 18){
        console.log("Access Granted");
    }else{
        console.log("Access Denied")
    }
}

checkAge(12);
checkAge(18);
checkAge(25);


// mini project
let users = [
    "Mahmud",
    "Aisha",
    "John",
    "Fatima",
    "David"
];
function welcomeUser(name){
    console.log(`welcome to tech crush, ${name}`)
}
for(let n=0; n<users.length; n++){
        welcomeUser(users[n])
    }

    // Array
    let fruits = ["Apple", "Banana", "Orange"];
    fruits.push("Mango")
    console.log(fruits)

    let colors = ["Blue", "Green", "Yellow"];
    colors.unshift("red")
    console.log(colors)

    let countries = ["Nigeria", "Ghana", "Kenya", "Egypt"];
    countries.pop()
    console.log(countries);

    let numbers = [10, 20, 30, 40, 50];
    numbers.shift()
    console.log(numbers);

    let students = ["Mahmud", "Aisha", "John", "David"];
    if(students.includes("John")){
        console.log("Student Found")
    }else{
        console.log("Student Not Found")
    }


    let users = ["Mahmud", "Aisha", "John"];
    users.push("Fatima");
    users.shift();
    if(users.includes("John")){
        console.log("Login Successful")
    }else{
        console.log("User not found")
    }

    let cart = ["Rice", "Beans"];
    cart.push("Milk");
    cart.push("Bread");
    cart.pop();
    if(cart.includes("Milk")){
        console.log("Ready for Checkout")
    }else{
        console.log("Card updated")
    }

    // 
    let users = ["Mahmud", "Aisha", "John"];
    users.push("Fatima");
   function greetUser(name){
       console.log(`Hello, ${name}`)
    }
 for(let k=0; k<users.length; k++){
           
           
             greetUser(users[k])
        }
         if(users.includes("John")){
                console.log("John can log in.")
            }else{
                console.log("John does not exist.")
            }
   */

            // slice
            let colors = ["Red", "Blue", "Green", "Yellow", "Black"];
            let newColor = colors.slice(1, 3)
            console.log(newColor)

            // splice
            let fruits = ["Apple", "Banana", "Orange"];
            fruits.splice(1,1, "Mango")
            console.log(fruits)

            let users = ["Mahmud", "Aisha", "John"];
            users.splice(2,0, "Fatima")
            console.log(users)



