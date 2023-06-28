const express = require('express')
const app = express()
const port = 9000 || process.env.port
var cors = require('cors')
const connection=require("./database/connection")

app.use(cors())
app.use(express.json())

connection();

app.get('/', (req, res) => {
  res.send('Welcome to auth api')
})

// @Route:/signup
app.use('/',require('./routes/signup'))

// @Route:/login
app.use('/',require('./routes/login'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
