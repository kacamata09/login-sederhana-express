const bodyParser = require('body-parser')
const express = require('express')
const koneksi = require('./config/database')

// router register
const router_register = require('./routes/router-register')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(router_register)









const PORT = 3000
const display = `Server ini sedang berjalan di PORT : ${PORT}`
app.listen(PORT, console.log(display))