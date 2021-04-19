const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./db.js')

mongoose.Promise = global.Promise
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    error => { console.log('Connect failed') })

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Server is running on http://localhost:', port)
})