const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")

mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { foo: 'Foo' });
})


app.get('/generate', async (req, res) => {
    //Generate random data
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: "Harry",
            language: "python",
            city: "new York",
            isManager: true
        })
        console.log(e)

    }

    res.render('index', { foo: 'Foo' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
