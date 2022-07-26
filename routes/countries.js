const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

router.get('/new', countriesCtrl.new);
router.post('/', countriesCtrl.create);
router.post('/oreos/:id/countries', countriesCtrl.addToAvail);
router.get('/', countriesCtrl.index);

module.exports = router;