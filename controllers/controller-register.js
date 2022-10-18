const koneksi = require('../config/database')

module.exports = {
    tampil(requ, resp) {
        const querytampil = 'select * from table_user'
        koneksi.query(querytampil, (err, rows, field)=> {
            if (err) throw err
            resp.render('register.ejs', data=rows)
        })
    },
    tambah(requ, resp) {
        const querysql = 'insert into table_user set ?'
        let getData = requ.body
        koneksi.query(querysql, getData, (err, rows, field) => {
            if(err) throw err
            resp.redirect('/register')
        })
    }
}