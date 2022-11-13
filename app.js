const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const apiRoutes = require('./routes/apiRoutes')

app.use(express.json())
app.use(cors())

app.use('/api', apiRoutes);

if(process.env.NODE_ENV==='development') {
    app.use(morgan('dev'))
}

module.exports = app