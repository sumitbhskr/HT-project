const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about us')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug/', (req, res) => {
    // logic to fatch {slug} from the db
    //for 
    console.log(req.params) // will output { slug: 'intro-to-padosi'}
     console.log(req.query) // will output { mode: 'dark', region: 'in'}
  res.send(`hello ${req.params.slug}`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fatch intro to js from the db
//   res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fatch intro to python from the db
//   res.send('Hello intro-to-python!')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
