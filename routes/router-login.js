const express = require('express')
const controller = require('../controllers/controller-login')
const router = express.Router()

router.route('/login')
    .get(controller.tampil)
    .post(controller.masuk)

module.exports = router