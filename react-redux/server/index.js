const express = require('express')
const server = express()

server.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Request-Method", "*");
  next()
})
server.get('/aa', (req, res) => {
  res.json({
    a: 1
  })
})
server.listen(4000, () => {
  console.log('http://localhost:4000')
})