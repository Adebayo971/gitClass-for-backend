let students = ["Sara" ,"Samad" ,"Godwin" ,"Mohh" ]
console.log(students[0])
console.log(students.length)
students[3] = "Effiong"
console.log(students)

//adding elements to an array
students.push("Mohh") //adds items to the end of the array 
console.log(students)

students.unshift("Uzoma") //adds items to the beginning of the array 
console.log(students)

//removing elememts
students.pop() //removes the last item in the array
console.log(students)
students.shift() //removes the first item in the array
console.log(students)

//includes , indexOf
console.log(students.includes("Sara"))
console.log(students.indexOf("Sara"))

// reverse
students.reverse()
console.log("This is reverse", students)

// sort
students.sort()
console.log("This is sort", students)

console.log("This is slice", students.slice(1, 3))
console.log("This is splice", students.splice(1, 2, "math", "esther"))


// higher order array method
// map, filter, reduce, find, findindex, some, every

// map
const nunber = [1, 2, 3, 4, 5];
const doubleNumber = nunber.map((num) => num*2)
console.log(doubleNumber)

const marketList= ["rice", "beam", "garri", "yam", "plantain"]
const addedPrif = marketList.map((item) => "i will buy: " + item)
console.log(addedPrif)



// filter
const evenNumber = nunber.filter((num) => num%2 === 0)
console.log(evenNumber)

const complexion = ["dark", "fair", "medium", "dark", "fair"]
const darkComplexion = complexion.filter((item) => item === "dark")
console.log(darkComplexion)

const findFirstDark = complexion.find((item) => item === "dark")
console.log(findFirstDark)

const findIndexDark = complexion.findIndex((item) => "dark")
console.log(findIndexDark)

// reduce
const nums = [700, 300, 500, 1000, 2000]
const sum = nums.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0)
console.log(sum)

const multiply = nums.reduce((accumulator, currentvalue) => accumulator*currentvalue, 1)
console.log(multiply)