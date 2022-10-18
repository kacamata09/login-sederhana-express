const express = require('express')
const controller = require('../controllers/controller-register')
const router = express.Router()

router.route('/register')
    .get(controller.tampil)
    .post(controller.tambah)

module.exports = router