const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const port = process.env.PORT || 5050
const app = express()
var connection = require('./db');



app.use(cors())
app.use(bodyParser.json())

const router = require('./route')
app.use('/api/', router)

app.get('/' , (req , res) => {
  res.json({status:"ok"})
})

app.listen(port, () => {
  console.log(`server run on => http://localhost:${port}`)
})
