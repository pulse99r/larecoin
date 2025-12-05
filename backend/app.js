const express = require('express')
const app = express()

const cors = require('cors')
app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  const msg = `
  Welcome to the larecoin backend!!
  
  `
  res.send(msg)
})

app.get('*path', (req, res) => {
  res.send('The page you are looking for does not exist')
})

module.exports = app;