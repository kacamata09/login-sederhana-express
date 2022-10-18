const mysql = require('mysql')

const koneksi = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_node_login'
})

koneksi.connect((err)=>{
    if (err) throw err
    console.log('mysql sedang berjalan...')
})

module.exports = koneksi