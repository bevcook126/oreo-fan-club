const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

router.post('/oreos/:id/countries', countriesCtrl.create);

module.exports = router;