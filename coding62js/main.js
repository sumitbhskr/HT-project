//method
//res.download() -> Prompt a file to be downloaded.
//res.end() -> End the response process.
//res.json() -> Send a JSON response.
//res.jsonp() -> Send a JSON response with JSONP support.
//res.redirect() -> Redirect a request.
//res.render() -> Render a view template.
//res.send() -> Send a response of vairous type.
//res.sendfile -> Send a file as an octet stream.
//res.sendStatus() -> Set the response status code and send its string repersentation as the response body.



const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog',blog)
app.use('/shop',shop)


app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World2!')
})

app.post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})


app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name:["Sumit", "Amit"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})