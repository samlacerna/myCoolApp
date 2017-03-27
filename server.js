const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5050
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017')

app.use(function (err, req, res, next) {
    if (err) console.error(err)
    res.sendStatus(404)
})

app.use(bodyParser.json())
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

//routes=================================================================
app.use(require('./app/routes'))

app.listen(5050, () => {
    console.log('The magic is happening at port 5050')
})

module.exports = app