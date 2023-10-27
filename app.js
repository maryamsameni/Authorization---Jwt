const express = require('express')
const app = express()

const { notFoundError, internalServerError } = require('./utils/error-handler')
const router = require('./router/index.routes')

const { default: mongoose } = require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/Authentication', {}).then(() => {
    console.log('connected');
}).catch((error) => console.log(error))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(router)
app.use(notFoundError)
app.use(internalServerError)

app.listen(3000, () => {
    console.log('Server Run http://localhost:3000');
})