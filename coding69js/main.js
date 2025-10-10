// https://WWW.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "Hey first todo", desc: "Description of this todo", isDone: false })
    todo.save()
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// import mongoose from "mongoose";
// import express from "express";
// import { Todo } from "./models/Todo.js";

// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/todo");
//   console.log("MongoDB connected");
// }
// main();

// const app = express();
// const port = 3000;

// app.get('/', async (req, res) => {
//   const todo = new Todo({
//     title: "Hey first todo",
//     desc: "Description of this todo",
//     isDone: false
//   });
//   await todo.save();
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

