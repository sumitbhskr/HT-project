//CRUD Opreation
use("CruDb")

//READ

// console.log(db)
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments:12,
//     project:45
// })
//  db.courses.insertMany(
// [
//     {
//         "name": "python Masterclass",
//         "price":0,
//         "assignments":10,
//         "project":30

//     },
//     {
//         "name": "JavaScript Basics",
//         "price":0,
//         "assignments":8,
//         "project":20

//     },
//     {
//         "name": "Java Programing Essentials",
//         "price":0,
//         "assignments":14,
//         "project":38

//     },
//         {
//         "name": "Reactjs  Crash Course",
//         "price":0,
//         "assignments":10,
//         "project":24

//     },
//         {
//         "name": "SQL Simplified",
//         "price":0,
//         "assignments":12,
//         "project":23

//     },
//           {
//         "name": "Responsive Web Design",
//         "price":0,
//         "assignments":4,
//         "project":11

//     },
// ]

//  )


//let a = db.courses.find({price: 0})
//console.log(a)
//console.log(a.count())
//console.log(a.toArray())


// let b = db.courses.findOne({price: 0})

// console.log(b)

//UPDATE

//db.courses.updateOne({ price: 0 }, { $set: { price: 100 } })
 
//db.courses.updateMany({ price: 0 }, { $set: { price: 1000 } })

//DELETE
 //db.courses.deleteOne({price:100})
 db.courses.deleteMany({price:100})
