import express from 'express'
import path from 'path'
import cors from 'cors'
import passport from 'passport'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import usersRoute from './routes/users.js'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGOURI)
mongoose.connection.on('connected', () => {
  console.log('Connected to DB.')
})
mongoose.connection.on('error', (err) => {
  console.log(`Error in connecting to DB: ${err}`)
})

app.use(cors())
app.use(express.json())

app.use('/users', usersRoute)

const PORT = 3000 || process.env.PORT

app.get('/', (req, res) => {
  res.status(200).json({ data: 'Okay' })
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`)
})
