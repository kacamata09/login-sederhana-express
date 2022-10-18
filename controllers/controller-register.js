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
        const querysql = 'insert into table_user(user_name, user_email, user_password) values(?,?,SHA2(?,512))'
        let getData = requ.body
        koneksi.query(querysql, [getData.user_name, getData.user_email, getData.user_password], (err, rows, field) => {
            if(err) throw err
            resp.redirect('/register')
        })
    }
}