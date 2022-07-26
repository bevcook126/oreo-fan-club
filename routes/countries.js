const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

router.get('/new', countriesCtrl.new);
router.post('/', countriesCtrl.create);
router.get('/', countriesCtrl.index);
router.post('/oreos/:id/countries', countriesCtrl.addToAvail);

module.exports = router;