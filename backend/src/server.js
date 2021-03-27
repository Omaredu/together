const express = require('express')
const { db } = require('./config')
const app = express()
const config = require('./config')

// setup morgan request logger
app.use(require('morgan')('dev'))

// setup body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(config.consts.PORT, (req, res) => {
    console.log(`[app] server on port: ${config.consts.PORT}`)
})

// setup database connection
config.db.connect(config.consts.MONGO_URL)

// setup router
app.use(config.router)