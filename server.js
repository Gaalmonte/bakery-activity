const express = require('express')
const app = express()

require('dotenv').config()
console.log(process.env.PORT)
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => console.log("listening on port ${PORT}"))
