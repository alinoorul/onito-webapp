const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config({ path: path.join(__dirname, 'config', 'config.env') })
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')


const port = process.env.PORT || 5000


connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/patientdata', require('./routes/patientDataRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
