const express = require('express')
const app = express()
const cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.get('/test', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res
    .status(200)
    .send('Hello world this is an introduction to CI/CD with github actions')
})
module.exports = app
