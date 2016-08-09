'use strict'
const express = require('express')
const port = process.env.PORT || 3000

const app = express()
app.use('/', express.static('public'));


app.listen(port, function () {
  console.log(`server listening on port: ${port}`)
})
