let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter operation")
let c = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if(random > 0.1){
    //Perform correct calculation
   console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${evel(`${a} ${c} ${b}`)}`)
}

else{
    //perform wrong calculation
    c = obj[c]
    alert(`The result is ${evel(`${a} ${c} ${b}`)}`)

}