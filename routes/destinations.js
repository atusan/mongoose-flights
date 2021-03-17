const express = require('express');
const router = express.Router();
const destinatinsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinatinsCtrl.create);

module.exports = router