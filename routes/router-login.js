const express = require('express')
const controller = require('../controllers/controller-login')
const router = express.Router()
const verifyUser = require('../config/verify')

router.route('/login')
    .get(verifyUser.isLogout, controller.tampil)
    .post(controller.masuk)

module.exports = router