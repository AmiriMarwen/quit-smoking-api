const express = require('express')
const app = express()
const port = process.env.PORT || 3000




app.get('/' , (req , res) => {
  res.sendFile('./views/index.html' , {root : __dirname});
})

app.get('/create' , (req , res) => {
  res.sendFile('./views/create.html' , {root : __dirname});
})

app.get((req , res) => {
  res.sendFile('./views/404.html' , {root : __dirname});
})


app.listen(port, () => {
  console.log(`client run on => http://localhost:${port}`)
})
