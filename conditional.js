//  if else
    let age = 15;
if (age >= 18) {
    console.log("You can vote")
}else{
    console.log("you cannot vote")
}

let gender = "male"

if (gender === "female") {
    console.log(" You are a female , use the laddy's restroom ")
} else if(gender ==="non-binary"){
    console.log("use the none binary room")
} else if(gender ==="trans"){
    console.log("use the trans room")
}else{
    console.log("use the male room")
}

// loop

// for(start; CSSCondition; increement)

for(let i=0; i<=10; i++){
    console.log(i)
}

let arrOfNames = ["james", "jane", "joe", "jim", "jess" ,"esther"]

console.log(arrOfNames.length)

for(let names = 0; names <arrOfNames.length; names++){

    console.log("TECHCRUSH" + arrOfNames[names])

}

for(let x = 0; x<36; x++){
    console.log(x * 2)
}

// three multiplication table
for(let y = 0; y<=12; y++){
    console.log(y * 3)
}

// while
let logInAttempt = 1
while(logInAttempt <= 3){
    console.log(`attempt number ${logInAttempt}`)
    logInAttempt++
}

// class work
let scores = [20, 12, 25, 15];
for(let newScore = 0; newScore < scores.length; newScore++){
    console.log(scores[newScore]+ 20)
}

// funcction
