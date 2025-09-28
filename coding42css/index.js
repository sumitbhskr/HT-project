function nice(name) {
    console.log("Hey "+ name + " you are nice!")
    console.log("Hey "+ name + " you are good!")
    console.log("Hey "+ name + " your tshirt is nice!")
    console.log("Hey "+ name + "your course is good too!")
}
nice("Pankaj")
// nice("Vikash")

// nice("Amit")
// nice("Sumit")

// console.log("Hey  Harry you are nice!")
// console.log("Hey  Harry you are good!")
// console.log("Hey  Harry your tshirt is nice!")
// console.log("Hey  Harry your course is good too!")


function sum(a, b, c = 3) {
    //  console.log(a + b)
    return a + b + c
}
result1 = sum(3, 5)
result2 = sum(7, 5)
result3 = sum(13, 9)
 
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

const func1 = (x)=>{
    console.log("I am an arrow function, x") // arrow function
}

func1(34);
func1(66);
func1(83);

