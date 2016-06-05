import express from 'express'
import api from './api'
var app = express()

app.use('/', api)
app.listen(3000, () => {
  console.log('App start!')
})