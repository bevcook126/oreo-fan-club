const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

router.get('/new', countriesCtrl.new);
router.post('/', countriesCtrl.create);
router.get('/', countriesCtrl.index);
router.post('/:id', countriesCtrl.addToAvail);

module.exports = router;