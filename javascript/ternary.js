
// a=50
// a>=50?console.log('Hello'):console.log('bye')
// a>50?console.log('Hello'):console.log('bye')

//n=20
//n%2==0?console.log('NO is Even'):console.log('No is odd')

//n=21
//n%2==0?console.log('NO is Even'):console.log('No is odd')

//true?console.log('Hello'):console.log('Bye')

////a,b Grater between two number

//let a = 15;
//let b = 12;
//let grater = (a > b) ? a : b;
//console.log('Grater number is:' + grater);

////Grater between four number

let a = 12, b = 25, c = 7, d = 19;
let graterest = (a > b) ?((a>c))?((a>d) ? a : d) :((c>d) ? c : d) : ((b>c) ? ((b>d)? b :d) :((c>d) ? c :d));
console.log('Greatest number is:' + graterest); 


// ( condition ? true statements) (: false statements)