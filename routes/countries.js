const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new
router.get('/countries/new', countriesCtrl.new);
// POST /performers
router.post('/countries', countriesCtrl.create);
// POST /movies/:id/performers
router.post('/oreos/:id/countries', countriesCtrl.addToCountries);

module.exports = router;