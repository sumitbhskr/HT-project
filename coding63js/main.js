const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

//Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.Sumit = "I am Sumit bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is ${req.method}\n`)
    console.log(`${Date.now()} is ${req.method}`)
    // res.end("Hacked by Middlawre 1")
    next()
})

//Middleware 2
app.use('/', (req, res,next) => {
    res.send('m2')
    next()
})

app.get('/about', (req, res) => {
    res.send('about us' + req.Sumit)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
