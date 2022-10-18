const bodyParser = require('body-parser')
const express = require('express')
// const koneksi = require('./config/database')
const session = require('express-session');

// router
const router_register = require('./routes/router-register')
const router_login = require('./routes/router-login')

// import middleware
const verifyUser = require('./config/verify')

const app = express()

// Configurasi library session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'hacker, jangan menyerang',
    name: 'secretName',
    cookie: {
        sameSite: true,
        maxAge: 60000
    },
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use(router_register)
app.use(router_login)

// route dari home
app.get('/', verifyUser.isLogin, (requ, resp)=> {
    resp.send('jika anda bisa mengakses ini berarti anda telah berhasil login')
})








const PORT = 3000
const display = `Server ini sedang berjalan di PORT : ${PORT}`
app.listen(PORT, console.log(display))