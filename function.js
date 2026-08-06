//declare

//functions without parameters

function greetings (){

    console.log("HELLO WORLD")

}

greetings()

//add

 

//functions with parameters

function welcome(name){

    console.log(`Welcome to class MR/MISS/MRS ${name}`)

}

welcome("Esther")

function add (){

    let x =4;

    let y =6;

    console.log("the addition of x and y")

    return x + y

}

console.log(add())

function addition (x , y){

    return x + y

}

console.log(addition(9 , 10))

// age
function agecheck(age){
    if (age <= 18) {
        return "you are under age"
    }else{
        return " jaye lo egbon"
    }
}
let estherAge = agecheck(28)
console.log(estherAge)

// class work
function lucky(number){
    if(number === 4){
        return "You won"
    }else{
        return "try asgain"
    }
}

console.log(lucky(4))

// grade
function grade(mark){
    if(mark >=70 && mark <=100 ){
        return "A"
    }if (mark >-50 && mark <69) {
        return "B" 
    } else {
        return "C"
    }
}

console.log(grade(67))

// Arrow function
const minus = (num) =>{
    return num - 50
}








