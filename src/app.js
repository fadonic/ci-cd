const express = require('express')
const app = express()

app.get('/test', (_req, res) => {
  res
    .status(200)
    .send('Hello world this an introduction to CI/CD with github actions')
})
module.exports = app
