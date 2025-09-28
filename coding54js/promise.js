console.log('This is Promises');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you")
    }
    else {
    setInterval(() => {
        console.log("yes I am done")
        resolve("Harry")
    }, 3);
 }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you2")
    }
    else {
    setInterval(() => {
        console.log("yes I am done 2")
        resolve("Harry 2")
    }, 1);
 }
})


let p3 =Promise.allSettled([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
   console.log(err)
 })

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })