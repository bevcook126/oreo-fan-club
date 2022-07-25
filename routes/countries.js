const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

router.get('oreos/:id/countries/new', countriesCtrl.new);
router.post('/oreos/:id/countries', countriesCtrl.create);

module.exports = router;