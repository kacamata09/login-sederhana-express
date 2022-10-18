const koneksi  = require('../config/database')

module.exports = {
    tampil(requ, resp)  {
        resp.render('login.ejs')
    },
    masuk(requ, resp) {
        const getUser = requ.body
        const queryCari = 'select * from table_user where user_email = ? and user_password = SHA2(?, 512)'


            koneksi.query(queryCari, [getUser.user_email, getUser.user_password], (err, rows, field) => {
                if(err) throw err
                // if (getUser.user_email == rows[0].user_email) {
                    if (rows.length > 0) {
                        // if (rows[0].user_password == getUser.user_password) {
                        //     resp.send('selamat anda berhasil login')
                        // } else {
                        //     resp.send('password yang anda masukkan salah')
                        // }
                        resp.send('selamat anda berhasil login')
                } else {
                    resp.send('email atau password yang anda masukkan salah')
                }
                
            })
      

    }
}